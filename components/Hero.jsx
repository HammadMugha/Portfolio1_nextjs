import Image from "next/image";
import Button from "./Button";
import Card from "./Card";


export default function Hero(){
    return(
        <section className="">
            <div className="max-w-[1180px] mx-auto container">
                <div className="grid md:grid-cols-2 items-center gap-5">
                    <div className="col text-center lg:text-start">
                        <h2 className="md:text-6xl text-4xl md:leading-[62px] font-bold text-black">The Best <br /> Restaurants In<br /> Your Home</h2>
                        <p className="text-light my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className="flex items-center lg:justify-start justify-center gap-3">
                            <input placeholder="search" className='rounded-md px-3 py-2 shadow-md outline-none border-none'/>
                            <Button title={"SHOP NOW"} varient={"bg-primary px-6 py-2"}/>
                        </div>
                    </div>
                    <div className="col relative">
                        <Image src={"/photo-1.png"} alt="img" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}/>
                        {/* card created */}
                        <Card title={"250+"} varient={"absolute top-[150px] left-0"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}