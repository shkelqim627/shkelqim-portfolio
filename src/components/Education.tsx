const Education = () => {
  return (
    <section id="education" className="bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 font-sora text-white"> Education </h2>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
              <p className="text-sm text-gray-400 mb-2">2021 – 2025</p>
              <h3 className="text-xl font-bold mb-2 font-sora text-white">High School Diploma</h3>
              <p className="text-gray-300 font-inter">
                Gymnasium "7 March", Tetovo
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 font-sora text-white"> Experience </h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Dec 2025 – Present</p>
                <h3 className="text-xl font-bold mb-2 font-sora text-white">Frontend Developer</h3>
                <a href="https://incrosoft.com/" className="font-medium mb-3 text-gray-400 font-inter">
                  INCROSOFT (Remote)
                </a>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-300 font-inter">
                  <li>Working on INCROSOFT AI Platform, an AI-first talent marketplace for startups, SMEs, and enterprises</li>
                  <li>Collaborating with product designers and backend developers in Agile sprints</li>
                  <li>Contributing to Software Requirements Specification (SRS v1.0) with a focus on frontend and UX requirements</li>
                  <li>Developing React and Next.js components using TypeScript for multi-role user flows</li>
                  <li>Implementing responsive layouts, reusable UI components, and consistent design systems</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Nov 2024 – Feb 2025</p>
                <h3 className="text-xl font-bold mb-2 font-sora text-white">Junior Web Developer</h3>
                <a href="https://innobee.buzz/" className="font-medium mb-3 text-gray-400 font-inter">
                  InnoBee, Netherlands (Remote)
                </a>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-300 font-inter">
                  <li>Designed and implemented UI/UX for 30% of the app interfaces</li>
                  <li>Refactored legacy code to enhance maintainability and reduce bugs by 30%</li>
                  <li>Participated in Agile sprints, debugging, and testing cycles to improve delivery efficiency</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 flex flex-col">
                <p className="text-sm text-gray-400 mb-2">Jan 2022 – Oct 2022</p>
                <h3 className="text-xl font-bold mb-2 font-sora text-white">Full Stack Developer Intern</h3>
                  <a href="https://client.destination.as/" className="font-medium mb-3 text-gray-400 font-inter">
                      client.destination.as
                  </a>

                  <a href="https://client.destination.as/" className="font-medium mb-3 text-gray-400 font-inter">
                  Hexbold, Tetovo
                </a>
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-300 font-inter">
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
