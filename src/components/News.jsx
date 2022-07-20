import React from "react";

const News = ({ id, ...props }) => {
  return (
    <div id={id} className="pt-2 pb-6 lg:pb-28">
      <h2 className="text-center font-bold text-xl py-4">News</h2>

      <div className="px-4 md:px-6 lg:px-8 py-4 flex flex-col md:flex-row  gap-4">
        <Card title="Ad Content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Card>
        <div className="justify-self-stretch w-full news-card p-6">
          <h4 className="text-white font-bold text-lg">News about gaming</h4>
          <p className="text-white text-sm font-medium py-4">
            PUBG Mobile developer Krafton has invested $22.4 million (around Rs
            164 crore) in Indian esports and gaming firm Nodwin Gaming. The
            South Korean game developer and publisher is said to invest in
            Nodwin Gaming to “maintain some presence pt rich was once its key te
            od market”, according to a tech cruch report.
          </p>
          <p className="text-white text-sm font-medium py-4">
            Krafton is a publisher and a owner of popular games like pubg and
            pubg mobiles.
          </p>
        </div>
        <Card title="Promotion Content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Card>
      </div>
      <hr className="border-1 border-gray-400 " />
    </div>
  );
};

export default News;

const Card = ({ title, ...props }) => {
  return (
    <div className="w-full md:w-5/12 card px-4 py-6">
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-white pt-4">{props.children}</p>
    </div>
  );
};
