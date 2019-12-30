import React from "react"

const Contact = () => {
  return (
    <div className="w-full lg:mt-12">
      <h1 className="text-4xl mt-6 underline mb-6" id="contact">
        Contact Me
      </h1>
      <p>Email me at: <span className="text-c-orange">connerj70@gmail.com</span></p>
      <p className="mb-2">Or shoot me a quick message below 👍</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        name="contact2"
        method="POST"
        netlify="true"
      >
        <input type="hidden" name="form-name" value="contact2" />
        <p>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Name: <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" />
          </label>
        </p>
        <p>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Email: <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" />
          </label>
        </p>
        <p>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:{" "}
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
            ></textarea>
          </label>
        </p>
        <p>
          <button className="bg-black hover:bg-c-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact
