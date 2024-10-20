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
      {articles.map(({ path, content }) => (
        <Link
          to={`/article/${path.split('/').pop().replace('.md', '')}`}
          key={path}
          className="group relative w-full max-w-screen-md mx-auto mb-6"
        >
          {/* Glowing gradient border */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"
          ></div>

          {/* Main content */}
          <div
            className="relative px-7 py-6 bg-indigo-950 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold mb-4 text-gray-400">
                {path.split('/').pop().replace('.md', '')}
              </h2>
              <div
                className="text-gray-100"
                dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + '...' }}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Articles;
