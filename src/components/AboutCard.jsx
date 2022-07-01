import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border rounded-xl text-left py-12 px-8">
      <div>
        <div>
          <props.icon size={60} className="bg-[#00d8ff] p-2 rounded-full" />
        </div>
        <h3 className="py-4 text-xl font-bold">{props.heading} </h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default AboutCard;
