import React from "react";
import subscribeImg from "../assets/subscribe.jpg";

const Subscribe = () => {
  return (
    <div className="bg-black text-white w-full py-16 px-4 flex flex-col text-center">
      <h1>Join our DOLLA Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-2"
          type="email"
          placeholder="Enter your email"
        />
        <button className="text-white font-bold">Sign Up</button>
      </div>
      <div className="flex justify-center">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communications from Dolla.</p>
      </div>
    </div>
  );
};

export default Subscribe;
