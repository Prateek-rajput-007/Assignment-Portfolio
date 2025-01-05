function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-gray-900 text-gray-100 px-6 py-12 md:py-24 md:px-[3rem] lg:px-[12rem]"
    >
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#A594FD] opacity-20 rounded-full blur-3xl -top-16 -left-20"></div>
        <div className="absolute w-80 h-80 bg-[#5a80d2] opacity-20 rounded-full blur-3xl top-24 -right-16"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
          I’m Prateek, a MERN stack developer passionate about creating
          innovative and efficient web applications. Skilled in JavaScript,
          React, and Node.js, I specialize in building user-friendly interfaces
          and optimizing backend operations. I'm driven by curiosity, a love
          for learning new technologies, and a commitment to delivering
          high-quality solutions.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Skill 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto md:mx-0 text-[#A594FD]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4H8l4-4m0 0l4 4m-4-4v4h3m-5 8h1a3 3 0 003-3v-4a3 3 0 00-3-3H6a3 3 0 00-3 3v4a3 3 0 003 3h1"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Frontend Expertise</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting responsive and visually stunning interfaces using React,
            Tailwind CSS, and modern UI libraries.
          </p>
        </div>

        {/* Skill 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto md:mx-0 text-[#A594FD]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 8a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Backend Proficiency</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building efficient server-side logic and APIs using Node.js,
            Express.js, and MongoDB.
          </p>
        </div>

        {/* Skill 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <svg
              className="w-12 h-12 mx-auto md:mx-0 text-[#A594FD]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Continuous Learning</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Exploring emerging technologies to keep up with industry trends and
            improve my skill set.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
