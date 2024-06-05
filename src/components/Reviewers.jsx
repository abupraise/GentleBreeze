import React from "react";

const reviewers = [
  { img: "Ellipse7.png", styles: "w-[10rem] h-[10rem] m-[0_5rem_0_0]" },
  {
    img: "Ellipse9.png",
    styles: "w-[7.5rem] h-[7.5rem] m-[2.2rem_0_0.3rem_0]",
  },
  { img: "Ellipse6.png", styles: "w-[9.4rem] h-[9.4rem] self-end" },
  {
    img: "Ellipse8.png",
    styles: "w-[11.3rem] h-[11.3rem] absolute left-[5.7rem] bottom-0",
  },
];

const Reviewers = () => {
  return (
    <>
      <div className="relative m-[1.7rem_5.8rem_1.7rem_0]  flex p-[0_0_1.3rem_0] w-[27.2rem] h-auto box-border">
        <div className="relative flex flex-col w-[27.2rem] h-auto box-border">
          <div className="m-[0_0_0.3rem_0] flex flex-row self-start w-[22.5rem] box-border">
            {reviewers.slice(0, 2).map((reviewer, index) => (
              <div
                key={index}
                className={`rounded-full bg-cover bg-no-repeat relative shadow-lg ${reviewer.styles}`}
                style={{
                  backgroundImage: `url('/assets/images/${reviewer.img}')`,
                }}
              ></div>
            ))}
          </div>
          <div
            className="rounded-full bg-cover bg-no-repeat relative shadow-lg w-[9.4rem] h-[9.4rem] self-end"
            style={{ backgroundImage: "url('/assets/images/Ellipse6.png')" }}
          ></div>
        </div>
        <div
          className="rounded-full bg-cover bg-no-repeat absolute shadow-lg w-[11.3rem] h-[11.3rem] left-[5.7rem] bottom-0"
          style={{ backgroundImage: "url('/assets/images/Ellipse8.png')" }}
        ></div>
      </div>
    </>
  );
};

export default Reviewers;
