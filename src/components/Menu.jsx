import { Link } from "react-router-dom";

/**
 * Menu component
 *
 * Main navigation component of the app,
 * linking all pages
 *
 * @author James Sowerby
 */
function Menu() {
  return (
    <div className="relative flex justify-center">
      {/* Container for the entire menu with hover effect */}
      <div className="group relative w-full max-w-lg mb-6">
        {/* Glowing gradient border with scale effect */}
        <div
          className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
        ></div>

        {/* Menu content with slightly smaller scaling */}
        <nav className="relative bg-indigo-950 text-cobalt-blue-text p-4 rounded-lg mx-auto shadow-md transition-transform transform group-hover:scale-105 duration-500 z-10">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="snowby-blog/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="snowby-blog/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
