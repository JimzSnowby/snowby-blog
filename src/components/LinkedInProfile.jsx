import React from 'react';

function LinkedInProfile() {
  return (
    <div
      className="fixed md:right-4 md:top-32 top-16 left-0 right-0 mx-auto md:mx-0 w-full md:w-60 group z-30"
    >
      {/* Glowing gradient border */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"
      ></div>

      {/* Profile Content */}
      <div className="relative px-4 py-6 bg-indigo-950 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
        <h2 className="text-lg font-semibold text-gray-400">James Sowerby</h2>
        <p className="text-gray-300">Software Engineer</p>
        <a
          href="https://www.linkedin.com/in/james-sowerby-393146248/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          View LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default LinkedInProfile;
