import React from 'react';

function LinkedInProfile() {
  return (
    <div className="fixed right-4 top-1/5 group">
      {/* Glowing gradient border */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"
      ></div>

      {/* Profile Content */}
      <div className="relative w-60 px-4 py-6 bg-indigo-950 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
        <h2 className="text-lg font-semibold text-gray-400">James Sowerby</h2>
        <p className="text-gray-300">Computer Science Graduate</p>
        <p className="mt-4">
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/james-sowerby-393146248/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default LinkedInProfile;
