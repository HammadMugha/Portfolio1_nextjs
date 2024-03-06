import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Card from './Card'

function HeaderTwo({data,order}) {
  return (
    <section className="pt-[80px]">
            <div className="max-w-[1180px] mx-auto container">
                <div className={`grid md:grid-cols-2 items-center gap-5`}>
                    <div className={`col p-[30px] ${order&&"order-2"} relative`}>
                        <Image src={data.img} alt="img" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}/>
                        <Card title={"250+"} varient={"absolute top-[150px] -left-4"}/>
                    </div>
                    <div className="col">
                        <h2 className="md:text-[43px] text-4xl md:leading-[50px] font-bold text-black">{data.title}</h2>
                        <p className="text-light my-5">{data.desc}</p>
                        <Button title={"ORDER NOW"} varient={"bg-primary px-7 py-3"}/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HeaderTwo