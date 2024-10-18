import { useEffect, useState } from 'react';
import { marked } from 'marked';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Import all markdown files from the src/posts directory
    const markdownFiles = import.meta.glob('/src/posts/*.md');

    const loadArticles = async () => {
      // Map each file and load its content
      const loadedArticles = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, importFile]) => {
          const module = await importFile(); // Import the markdown file module
          const markdownContent = module.default; // The markdown content should be in module.default
          const htmlContent = marked(markdownContent); // Convert markdown to HTML
          return { path, content: htmlContent }; // Return file path and HTML content
        })
      );

      setArticles(loadedArticles); // Update state with loaded articles
    };

    loadArticles().catch((error) => console.error("Error loading markdown files:", error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {articles.map(({ path, content }, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
          {/* Render the markdown content as HTML */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ))}
    </div>
  );
}

export default Articles;
