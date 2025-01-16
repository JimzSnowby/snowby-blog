import Articles from "../components/Articles";
import Profile from '../components/Profile';
import Portfolio from "../components/Portfolio";

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
      <Profile />
      <Portfolio />
      <Articles />
    </div>
  );
}

export default Home;
