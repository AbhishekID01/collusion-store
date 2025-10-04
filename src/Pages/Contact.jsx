import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
     
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Page</h1>

      
      <div className="w-full max-w-3xl mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248847.38148864626!2d77.6208384!3d12.9564672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759031918307!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        <form
          action=""
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            autoComplete="off"
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            autoComplete="off"
            required
            rows="4"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-400"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="bg-black text-white rounded-md px-4 py-3 font-semibold hover:bg-gray-800 cursor-pointer transition"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
