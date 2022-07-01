import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover w-full h-full absolute z-[-1]"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] text-white flex flex-col justify-center items-center px-4 text-center">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="blue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Etherium
          applications.
        </p>
        <div>
          <button className="m-2">Use Dolla</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold">
          Total Volume Secured: $7,382,487.24
        </p>
      </div>
    </div>
  );
};

export default Hero;
