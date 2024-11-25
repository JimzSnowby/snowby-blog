import ProfilePic from "../assets/ProfilePic.jpg";

/**
 * About page
 *
 * Page that provides more info about me
 *
 * @author James Sowerby
 */
function About() {
  const skills = [
      "Java",
      "JavaScript",
      "Python",
      "C",
      "PHP",
      "SQL",
      "React",
      "Tailwind CSS",
  ];

  const hobbies = [
      "Developing Games",
      "Guitar",
      "Music Production Engineering",
      "Traveling",
  ];

  return (
      <div className="flex flex-col items-center">
          {/* Glowing border with scale effect */}
          <div className="group relative w-full max-w-screen-md mx-auto mt-12 mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-malibu-500 to-malibu-400 rounded-lg blur opacity-25 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>

              {/* Main content with padding and scale effect */}
              <div className="relative px-7 py-6 bg-malibu-900 ring-1 ring-gray-900/5 rounded-lg transition-transform transform group-hover:scale-105 duration-500 z-10">
                  <h1 className="text-4xl font-bold mb-4 text-cobalt-blue-text">About Me</h1>
                  <div className="flex justify-center items-center">
                    {/* Image */}
                    <img
                      src={ProfilePic}
                      alt="Profile Picture"
                      className="w-[250px] h-[250px] rounded-full"
                    />
                  </div>
                  <p className="text-gray-100 mb-4">
                      Hi, I'm James Sowerby, a passionate software developer with a keen interest in creating innovative solutions. Welcome to my portfolio!
                  </p>

                  {/* Skills Section */}
                  <section className="mb-6">
                      <h2 className="text-2xl font-semibold text-cobalt-blue-text mb-2">Skills</h2>
                      <ul className="list-disc list-inside text-gray-100 space-y-1">
                          {skills.map((skill, index) => (
                              <li key={index}>{skill}</li>
                          ))}
                      </ul>
                  </section>

                  {/* Hobbies Section */}
                  <section>
                      <h2 className="text-2xl font-semibold text-cobalt-blue-text mb-2">Hobbies</h2>
                      <ul className="list-disc list-inside text-gray-100 space-y-1">
                          {hobbies.map((hobby, index) => (
                              <li key={index}>{hobby}</li>
                          ))}
                      </ul>
                  </section>
              </div>
          </div>
      </div>
  );
}

export default About;
