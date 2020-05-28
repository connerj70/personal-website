import React, { useState } from "react"

const BlogEmailOffer = () => {
  let [name, setName] = useState("")
  return (
    <div
      style={{ top: "110px" }}
      className="cool-gradient rounded text-white border p-4 mt-4 w-full mb-4 sticky"
    >
      <div className="w-9/12 lg:w-10/12 m-auto">
        <h2 className="text-center text-2xl font-bold">Join my</h2>
        <h2 className="text-center text-2xl font-bold">
          var list [ ]CoolProgrammer
        </h2>
        <p className="text-black mt-2 text-center">
          Get post notifications and tips delivered to your inbox
        </p>
        <form
          name="emailList"
          method="POST"
          netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="emailList" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label className="block text-white text-sm font-bold mb-2">
              Your Name:{" "}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => setName(e.target.value)}
                type="text"
                name="name"
              />
            </label>
          </p>
          <p>
            <label className="block text-white text-sm font-bold mb-2">
              Your Email:{" "}
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
              Append {name}
            </button>
          </p>
          <p className="text-xs text-center">
            By subscribing, you acknowledge to have read & agreed to our Privacy
            Policy.
          </p>
        </form>
      </div>
    </div>
  )
}

export default BlogEmailOffer
