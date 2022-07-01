import React from "react";
import { SiFsecure, SiHiveBlockchain, SiStrapi } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem</h1>
          <p className="py-8 text-xl">
            The Dolla Protocol system empowers developers, liquidity providers
            and traders to participate in a finincial marketplace that is open
            and accessible to all.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCard
              icon={SiHiveBlockchain}
              heading="Reliable, tamper-proof network"
              content="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable."
            />
            <AboutCard
              icon={SiFsecure}
              heading="Seamless connection to any API"
              content="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable."
            />
            <AboutCard
              icon={SiStrapi}
              heading="Proven, ready-made solutions"
              content="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable."
            />
            <AboutCard
              icon={VscServerProcess}
              heading="Secure off-chain computation"
              content="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
