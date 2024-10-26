import Articles from "../components/Articles";
import LinkedInProfile from '../components/LinkedInProfile';

/**
 * Home page
 *
 * Main landing page for the application
 *
 * @author James Sowerby
 */
function Home() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 space-y-8">
      {/* Center the LinkedIn profile on desktop and keep layout flexible on mobile */}
      <LinkedInProfile />
      <Articles />
    </div>
  );
}

export default Home;
