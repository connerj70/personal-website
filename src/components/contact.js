import React from "react"

const Contact = () => {
  return (
    <div className="w-full lg:mt-12">
      <h1 className="text-4xl mt-6 underline mb-6" id="contact">
        Contact Me
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border ounded w-full lg:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border ounded w-full lg:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="subject"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border ounded w-full lg:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="subject"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border ounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            placeholder="message"
          />
        </div>
        <button
          className="bg-black hover:bg-c-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
