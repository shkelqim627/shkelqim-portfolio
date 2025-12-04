interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  return (
    <section id="education" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8"> Education </h2>
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <p className="text-sm text-gray-500 mb-2">2021 – 2025</p>
              <h3 className="text-xl font-bold mb-2">High School Diploma</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Gymnasium "7 March", Tetovo
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8"> Experience </h2>
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                <p className="text-sm text-gray-500 mb-2">Nov 2024 – Feb 2025</p>
                <h3 className="text-xl font-bold mb-2">Junior Web Developer</h3>
                <a href="https://innobee.buzz/" className={`font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  InnoBee, Netherlands (Remote)
                </a>
                <ul className={`list-disc list-outside ml-5 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Designed and implemented UI/UX for 30% of the app interfaces</li>
                  <li>Refactored legacy code to enhance maintainability and reduce bugs by 30%</li>
                  <li>Participated in Agile sprints, debugging, and testing cycles to improve delivery efficiency</li>
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-md flex flex-col`}>
                <p className="text-sm text-gray-500 mb-2">Jan 2022 – Oct 2022</p>
                <h3 className="text-xl font-bold mb-2">Full Stack Developer Intern</h3>
                  <a href="https://client.destination.as/" className={`font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      client.destination.as
                  </a>

                  <a href="https://client.destination.as/" className={`font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Hexbold, Tetovo
                </a>
                <ul className={`list-disc list-outside ml-5 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Built Angular frontends and ASP.NET Core backends for client projects, improving user task completion rate by 40%</li>
                  <li>Integrated third-party APIs and styled applications with Tailwind CSS for consistency and responsiveness</li>
                  <li>Optimized backend data handling and logic, reducing server response time by 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
