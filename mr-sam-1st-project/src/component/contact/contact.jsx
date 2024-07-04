import React from "react";

const contact = () => {
  return (
    <section className=" flex justify-center p-7">
      <form>
        <header className="font-bold text-3xl">Contact Us</header>
        <br />
        <div className="flex  gap-14">
          <div className="input-box ">
            <label>First Name</label>
            <input
              type="text"
              id="name"
              className="border-solid border-2 border-black rounded-lg w-full h-12"
              required
            />
          </div>
          <div className="input-box ">
            <label>Last Name</label>
            <input
              type="text"
              id="name"
              className="border-solid border-2 border-black rounded-lg w-full  h-12"
              required
            />
          </div>
        </div>
        <br />
        <div className="input-box">
          <label>Email Address</label>
          <br />
          <input
            type="email"
            className="border-solid border-2 border-black  w-full h-12 rounded-lg"
            required
          />
        </div>
        <br />

        <label>Query Type</label>
        <br />

        <div className="QueryType">
          <div className="flex justify-between gap-14 rounded-lg">
            <div className="outline outline-2 outline-offset-2 w-full rounded-lg p-2">
              <input type="radio" required /> General Enduiry
            </div>
            <div className="outline outline-2 outline-offset-2 w-full rounded-lg p-2">
              <input type="radio" required /> Support Request
            </div>
          </div>
        </div>
        <br />
        <div className="input-box">
          <label>Message</label>
          <br />
          <textarea
            name=""
            id=""
            className="border-solid border-2 border-black -600 box-border h-32 w-full p-4 border-1 rounded-lg"
            required
          ></textarea>
        </div>
        <br />
        <div className="input-box">
          <p>
            <input type="checkbox" /> I consent to being contacted by the team
          </p>
        </div>
        <br />
        <button className="border-solid border-2 border-green bg-green-600 w-full p-3 rounded-lg text-white">
          Submit
        </button>
      </form>
    </section>
  );
};

export default contact;
