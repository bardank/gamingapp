import React from "react";

const Favourite = ({ id, ...props }) => {
  const images = [
    {
      img: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pubg_game_660_141020121948.jpg",
      title: "PUBG",
    },
    {
      img: "http://i.imgur.com/nigFO5X.jpg",
      title: "Clash of Clans",
    },
    {
      img: "https://venturebeat.com/wp-content/uploads/2020/05/Garena-Free-Fire.jpg?w=1200&strip=all",
      title: "Free Fire",
    },
    {
      img: "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
      title: "Fortnite",
    },
  ];
  return (
    <div id={id} className="py-2">
      <h2 className="font-bold text-xl py-4">Favourite Games</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
        {images.map((item, i) => (
          <CardItem key={i} item={item} />
        ))}
      </div>
      <div className="subscribe rounded mt-12 mb-4 h-36 w-full flex justify-center items-center">
        <button
          className="py-3 px-4 opacity-50 tracking-wider font-semibold text-black"
          style={{ background: "red" }}
        >
          Subscribe
        </button>
      </div>
      <hr className="border-1 border-gray-400 " />
    </div>
  );
};

export default Favourite;

const CardItem = ({ item, ...props }) => {
  return (
    <div
      className="border-0 cursor-pointer"
      style={{ border: "1px solid #ccc7c7" }}
    >
      <img
        src={item.img}
        className="h-52 w-full object-cover"
        alt={item.title}
      />
      <div className="">
        <h3 className="text-center my-2 text-black text-xs">
          {item.title}
        </h3>
      </div>
    </div>
  );
};
