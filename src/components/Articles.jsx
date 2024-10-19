import { useEffect, useState } from 'react';
import { marked } from 'marked';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Import all markdown files from the src/posts directory
    const markdownFiles = import.meta.glob('/src/posts/*.md');

    const loadArticles = async () => {
      const loadedArticles = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, importFile]) => {
          const module = await importFile(); // Import the markdown file module
          const markdownContent = module.default; // The markdown content should be in module.default
          const htmlContent = marked(markdownContent); // Convert markdown to HTML
          return { path, content: htmlContent }; // Return file path and HTML content
        })
      );

      // Sort articles by file name (assuming they are named with a date like YYYY-MM-DD.md)
      const sortedArticles = loadedArticles.sort((a, b) => {
        const dateA = a.path.match(/(\d{4}-\d{2}-\d{2})/);
        const dateB = b.path.match(/(\d{4}-\d{2}-\d{2})/);

        // Fallback for files without a valid date in the filename
        if (!dateA || !dateB) return 0;

        return new Date(dateB[0]) - new Date(dateA[0]); // Sort by most recent date (newest first)
      });

      setArticles(sortedArticles); // Update state with sorted articles
    };

    loadArticles().catch((error) => console.error("Error loading markdown files:", error));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 text-cobalt-blue-text">Blog Posts</h1>
      {articles.map(({ path, content }, index) => (
        <div
          key={path}
          className="w-full max-w-screen-md bg-blue-200/90 shadow-lg rounded-lg p-6 my-6 mx-auto border border-blue-300 min-h-[200px]"
        >
          {/* Create a clickable link to the article's full page */}
          <Link to={`/article/${path.split('/').pop().replace('.md', '')}`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {path.split('/').pop().replace('.md', '')}
            </h2>
            {/* Optionally render a summary or snippet */}
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + '...' }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
