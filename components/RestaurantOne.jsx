import { restaurantThree } from "@/data";
import Image from "next/image";

export default function RestaurantOne() {
  return (
    <div className={"py-[70px]"}>
      <div className="container max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-2 gap-9">
          {restaurantThree.map((item, i) => (
            <div className="col p-[40px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.2)] rounded-lg transition-all duration-300 hover:translate-y-[-9px]" key={i}>
              <Image
                src={item.img}
                width={100}
                height={100}
                className="object-cover rounded-[12px]"
              />
              <h2 className="text-2xl font-semibold my-4 text-black">
                {item.title}
              </h2>
              <div className="flex gap-3"></div>
              <p className="text-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
