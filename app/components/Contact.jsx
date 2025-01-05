function ContactUs() {
  return (
    <section
      id="contact"
      className="container px-4 mx-auto my-8 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold text-center md:my-20">
        Contact Us
      </h1>
      <form className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#746FD1]"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#746FD1]"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#746FD1]"
            placeholder="Type your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 font-medium text-white bg-[#746FD1] rounded-lg hover:bg-[#5a80d2] focus:ring-4 focus:ring-[#746FD1] focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
