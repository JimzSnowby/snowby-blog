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
    <div className="flex flex-col items-center">
      {/* Glowing effect container */}
      <div className="group relative w-full max-w-screen-md mx-auto mt-12 mb-8">
        {/* Glowing gradient border */}
        <div
          className="absolute -inset-1 bg-gradient-to-r from-malibu-500 to-malibu-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"
        ></div>

        {/* Main article content */}
        <div
          className="relative px-7 py-6 bg-malibu-900 ring-1 ring-gray-900/5 rounded-lg leading-relaxed text-gray-100"
        >
          <h1 className="text-4xl font-bold text-center mb-6 text-malibu-600">{title}</h1>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
