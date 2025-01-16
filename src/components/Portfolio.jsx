import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/JimzSnowby/repos?sort=updated");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="text-center text-malibu-400">Loading repositories...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching repositories: {error}</p>;

  return (
    <div className="group relative w-full max-w-screen-md mx-auto mb-6">
      {/* Glowing gradient border with scale effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-malibu-500 to-malibu-400 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>

      {/* Main content with padding and scale effect */}
      <div className="relative px-7 py-6 bg-malibu-900 ring-1 ring-gray-900/5 rounded-lg flex flex-col space-y-4 transition-transform transform group-hover:scale-105 duration-500 z-10">
        <h2 className="text-2xl font-semibold text-center text-malibu-400">My GitHub Repositories</h2>
        <ul className="space-y-4">
          {repos.map(repo => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={repo.id}
              className="block"
            >
              <li className="p-4 bg-malibu-800 rounded-lg shadow hover:shadow-lg hover:bg-malibu-700 transition duration-300 cursor-pointer">
                <div className="text-xl font-semibold text-malibu-300">
                  {repo.name}
                </div>
                {repo.description && (
                  <p className="text-malibu-200 mt-1">{repo.description}</p>
                )}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
