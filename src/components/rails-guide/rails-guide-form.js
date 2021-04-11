import React from 'react'

const RailsGuideForm = () => {
  return (
    <div
    style={{ top: "110px", maxWidth: "500px", margin: "0 auto", zIndex: "10" }}
    className="guide-gradient rounded text-white border p-4 mt-4 w-full mb-4 md:sticky"
  >
    <div className="w-9/12 lg:w-10/12 m-auto">
      <h2 className="text-center text-3xl font-bold mb-3">
      Get The Rails Guide
      </h2>
      <form
        name="emailList"
        method="POST"
        netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="emailList" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label className="block text-white text-sm font-bold mb-2">
            Name:{" "}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
            />
          </label>
        </p>
        <p>
          <label className="block text-white text-sm font-bold mb-2">
            Email (where you want your guide delivered):{" "}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
            />
          </label>
        </p>
        <p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
           Send me my rails guide!
          </button>
        </p>
      </form>
    </div>
  </div>
  )
}

export default RailsGuideForm