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
    <nav className="bg-slate-600 text-cobalt-blue-text p-4">
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
