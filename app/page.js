import HeaderFour from "@/components/HeaderFour";
import HeaderOne from "@/components/HeaderOne";
import HeaderTwo from "@/components/HeaderTwo";
import Hero from "@/components/Hero";
import { headerThree, headerTwo } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <HeaderOne />
    <HeaderTwo data={headerTwo}/>
    <HeaderTwo data={headerThree} order={true}/>
    <HeaderFour />
    </>
  );
}
