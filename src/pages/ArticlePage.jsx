import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { marked } from 'marked';

function ArticlePage() {
  const { id } = useParams(); // Get the article ID from the URL
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const markdownFiles = import.meta.glob('/src/posts/*.md');

    const loadArticle = async () => {
      // Find the markdown file whose name matches the ID from the URL
      const fileEntries = Object.entries(markdownFiles);
      const matchingEntry = fileEntries.find(([path]) =>
        path.includes(id) // Check if the file path includes the article ID (e.g., 2024-10-16)
      );

      if (matchingEntry) {
        const [path, importFile] = matchingEntry;
        const module = await importFile();
        const markdownContent = module.default;
        const htmlContent = marked(markdownContent);

        setTitle(path.split('/').pop().replace('.md', '')); // Set the article title from the file name
        setContent(htmlContent); // Set the full HTML content
      } else {
        console.error("Article not found");
      }
    };

    loadArticle().catch((error) => console.error("Error loading markdown file:", error));
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
      {/* Render the full content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArticlePage;
