import React from "react";

const About = ({ id, ...props }) => {
  const team = [1, 2, 3, 4];
  return (
    <div id={id} className="pt-2  md:pb-12">
      <h2 className="font-bold text-xl py-4">About The team</h2>

      <div className="grid md:grid-cols-4 gap-4 pb-4">
        {team.map((item, i) => (
          <CardItem key={i} num={item} />
        ))}
      </div>
      <hr className="border-1 border-gray-400 " />
    </div>
  );
};

export default About;

const CardItem = ({ num, ...props }) => {
  return (
    <div className="bg-gray-200 p-4 shadow-lg">
      <div className="flex justify-center">
        <img
          src="https://t3.ftcdn.net/jpg/03/29/36/40/360_F_329364028_wVuGGblS5BxfbbQYiPMZzpzOuAYUBkzx.jpg"
          className="h-20 w-20 rounded-full border-black border-2"
          alt=""
        />
      </div>
      <div>
        <h3 className="text-center my-4 text-black font-semibold">
          Friend#{num}
        </h3>
        <p className="text-xs text-black mt-4 text-center tracking-widest">
          I first met Courtney in my first year of middle school in my English
          room. She was so warm and kind that I felt honored to speak to such a
          nice angel. Courtney became my first true friend that I could ever
          count on. She was always there ina heartbeat when I needed hec wise
          words of wisdom.
        </p>
      </div>
    </div>
  );
};
