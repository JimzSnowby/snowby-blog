import Articles from "../components/Articles"
import LinkedInProfile from '../components/LinkedInProfile';

/**
* Home page
*
* This is the main landing page for the application
*
* @author James Sowerby
*/
function Home() {
    return (
    <>
        <LinkedInProfile />
        <Articles />
    </>
    )
}

export default Home