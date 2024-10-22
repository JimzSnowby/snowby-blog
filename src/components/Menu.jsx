import { Link } from "react-router-dom";

/**
 * Menu component
 *
 * Main navigation component of the app.
 * links all pages
 *
 * @author James Sowerby
 */
function Menu() {
  return (
    <nav className="bg-indigo-950 text-cobalt-blue-text p-4 rounded-lg mx-auto max-w-lg shadow-md">
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
  );
}

export default Menu;
