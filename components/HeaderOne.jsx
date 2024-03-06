import { headerOne } from "@/data";
import Image from "next/image";
import React from "react";

function HeaderOne() {
  return (
    <section className="pt-[60px]">
      <div className="max-w-[1180px] mx-auto container">
        <div className="heading mb-14 text-center">
          <h1 className="text-5xl text-black mb-5 font-bold">How It Works</h1>
          <p className="text-light">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis 
            tellus in <br /> metus vulputate eu scelerisque felis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 items-center gap-[50px] text-center">
          {headerOne.map((item, index) => (
            <div className="col" key={index}>
              <Image
                src={item.img}
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="my-5 text-[25px] font-semibold text-black">{item.title}</h2>
              <p className="text-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeaderOne;
