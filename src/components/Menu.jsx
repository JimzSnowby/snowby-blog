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
    return(
        <nav>
            <li><Link to="snowby-blog/">Home</Link></li>
            <li><Link to="snowby-blog/about">About</Link></li>
        </nav>
    )
}

export default Menu