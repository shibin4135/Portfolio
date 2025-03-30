import { sendForm } from "@emailjs/browser";
import { FormEvent, useState } from "react";

const SERVICE_ID = "service_3nq0qdt";
const TEMPLATE_ID = "template_g0rq8us";
const PUBLIC_KEY = "h4bWFf_dPeshNi4_9";

const handleContact = (e: FormEvent) => {
  e.preventDefault();
  sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
    .then(() => alert("Message Sent"))
    .catch(() => alert("Something went wrong"));
};

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-900 p-6"
      id="contact"
    >
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>
        <form className="space-y-4" onSubmit={handleContact}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Enter Your Message"
              required
              className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
