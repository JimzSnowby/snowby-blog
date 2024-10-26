/**
 * About page
 *
 * Page that provides more info about me
 *
 * @author James Sowerby
 */
function About() {
    return (
      <div className="flex flex-col items-center">
        {/* Glowing border with scale effect */}
        <div className="group relative w-full max-w-screen-md mx-auto mt-12 mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
  
          {/* Main content with padding and scale effect */}
          <div className="relative px-7 py-6 bg-indigo-950 ring-1 ring-gray-900/5 rounded-lg transition-transform transform group-hover:scale-105 duration-500 z-10">
            <h1 className="text-4xl font-bold mb-4 text-cobalt-blue-text">About</h1>
            <p className="text-gray-100">This page is under construction</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  