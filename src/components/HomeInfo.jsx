import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-small sm:text-m text-center h-3">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn font-small sm:text:xs py-2 px-8 h-9"
    >
      {btnText}
      <img src={arrow} className="w-2 h-2 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-8 text-white mx-5 ">
      Hii, I am <span className="font-semibold"> Rahul</span> 🤙
      <br />A Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Has gained and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led Multiple Projects to success over the years"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="I am just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
