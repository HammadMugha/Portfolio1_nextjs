import Image from 'next/image'
import React from 'react'
import Button from './Button'

function HeaderFour() {
  return (
    <section className="pt-[80px]">
            <div className="max-w-[1180px] mx-auto container">
                <div className="grid md:grid-cols-2 items-center gap-10">
                    <div className="col p-[30px]">
                        <Image src={"/illustration-4.png"} alt="img" width={0} height={0} sizes="100vw" style={{width:"100%",height:"auto"}}/>
                    </div>
                    <div className="col">
                        <h2 className="md:text-[43px] text-4xl md:leading-[50px] font-bold mb-5 text-black">Get the menu of your favorite restaurants every day</h2>
                        <div className="flex gap-4 flex-col md:flex-row">
                            <input type="text" placeholder='Enter Email Address' className='rounded-md px-3 py-3 shadow-md outline-none border-none'/>
                            <Button title={"ORDER NOW"} varient={"text-white bg-primary px-7 py-3"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HeaderFour