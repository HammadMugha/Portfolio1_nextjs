import React from "react";
import Button from "./Button";
import Image from "next/image";

function AboutOne({ data,order }) {
  return (
    <section className="pt-[80px]">
      <div className="max-w-[1180px] mx-auto container">
        <div className={`grid md:grid-cols-2 items-center gap-5`}>
          <div className={`col p-[30px] ${order && "order-2"} relative`}>
            <div className="border-primary border-[8px] rounded-[30px]">
            <Image
              src={data.img}
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="rotate-[18deg] rounded-[30px]"
              style={{ width: "100%", height: "auto" }}
            />
            </div>
          </div>
          <div className="col">
            <h2 className="md:text-[43px] text-4xl md:leading-[50px] font-bold text-black">
              {data.title}
            </h2>
            <p className="text-light my-5">{data.desc}</p>
            <Button title={"ABOUT US"} varient={"bg-primary px-7 py-3"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOne;
