import { aboutThree } from '@/data'
import Image from 'next/image'
import React from 'react'
import AboutCard from './AboutCard'

function AboutThree() {
  return (
    <section className='bg-[url(/background.png)] bg-center bg-no-repeat bg-cover py-[80px] mt-[80px]'>
        <div className="max-w-[1180px] mx-auto container">
            <div className="grid md:grid-cols-2 gap-11 items-center">
                <div className="col">
                <Image src={"/photo-10.png"} alt="img" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}/>
                </div>
                <div className="col">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="col">
                            <h2 className='text-3xl text-dark font-bold'>Service shows good taste.</h2>
                        </div>
                        {aboutThree.map((item,i)=>(
                                <AboutCard item={item} key={i}/>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutThree