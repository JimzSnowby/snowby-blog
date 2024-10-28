import { Link } from "react-router-dom";
import ProfilePic from "../assets/ProfilePic.jpg";

function Profile() {
  return (
    <div className="group relative w-full max-w-screen-md mx-auto mb-6">
      {/* Glowing gradient border with scale effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-malibu-500 to-malibu-400 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>

      {/* Main content with padding and scale effect */}
      <div className="relative px-7 py-6 bg-malibu-900 ring-1 ring-gray-900/5 rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 transition-transform transform group-hover:scale-105 duration-500 z-10">
        
        {/* Image */}
        <img
          src={ProfilePic}
          alt="Profile Picture"
          className="w-[250px] h-[250px] rounded-full"
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2 text-malibu-400">Hi, I'm James Sowerby</h2>
          <p>A Computer Science graduate from Northumbria University.</p>
          <p>For more information about who I am, click the About button at the top of the page, or connect with me on <Link to="https://www.linkedin.com/in/james-sowerby-393146248/" className="text-blue-400 underline">LinkedIn!</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
