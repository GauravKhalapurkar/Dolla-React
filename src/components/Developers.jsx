import React from "react";
import terminalImg from "../assets/terminal.png";

const Developers = () => {
  return (
    <div>
      <div className="w-full bg-black">
        <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
          <div className="text-white md:mx-4">
            <h3 className="text-3xl font-bold my-6">
              Superpowers for DOLLA Developers
            </h3>
            <p className="text-xl">
              Checkout the{" "}
              <span className="text-[color:var(--primary-blue)]">
                documentation
              </span>
              , the{" "}
              <span className="text-[color:var(--primary-blue)]">
                quick-start
              </span>{" "}
              or a guide below to integrate your project with thousands of
              tokens and billions of liquidity.
            </p>
          </div>
          <div className="md:mx-4 flex justify-center w-full md:py-0 py-16">
            <img
              src={terminalImg}
              className="max-w-[300px] shadow-lg shadow-[color:var(--primary-blue)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
