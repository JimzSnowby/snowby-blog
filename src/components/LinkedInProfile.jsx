import { Link } from "react-router-dom";

function LinkedInProfile() {
  return (
    <div className="group relative w-full max-w-screen-md mx-auto mb-6">
      
      {/* Glowing gradient border with scale effect */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
      ></div>

      {/* Main content with padding and scale effect */}
      <div
        className="relative px-7 py-6 bg-malibu-900 ring-1 ring-gray-900/5 rounded-lg flex flex-col items-start space-y-2 transition-transform transform group-hover:scale-105 duration-500 z-10"
      >
        <h2 className="text-2xl font-semibold mb-2 text-gray-100">Hi, I'm James Sowerby</h2>
        <p>A Computer Science graduate from Northumbria University.</p>
        <p>For more information about who I am, click the About button at the top of the page, or connect with me on <Link to="https://www.linkedin.com/in/james-sowerby-393146248/" className="text-blue-400 underline">LinkedIn!</Link></p>
      </div>
    </div>
  );
}

export default LinkedInProfile;
