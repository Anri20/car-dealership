"use client"

import { Button } from "../ui/button"
import Iconify from "../Iconify"
import Image from "next/image"

const Banner = () => {

    return (
        <section
            className="flex h-[100vh] px-6 items-center bg-[#101926] text-[#f5f5f5]"
        >
            <div className="w-full max-w-7xl  mx-auto flex justify-between items-center">

                <div className="flex flex-col max-w-sm gap-8 lg:gap-10">

                    <div className="space-y-5 lg:space-y-6">
                        <div className="flex gap-2.5 text-[#97d9f0] text-sm lg:text-base font-medium uppercase">
                            <p>East Java</p>
                            <p>·</p>
                            <p>Surabaya</p>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            Used Cars, Made Easy
                        </h1>
                        <p className="text-gray-400 text-base lg:text-lg">We handpick cars we would buy. Safe choices, honest prices, and a guarantee that actually matters.</p>
                    </div>

                    <div className="flex gap-5 justify-start lg:justify-between lg:justify-start items-center">
                        <Button className="p-5 lg:p-6 text-sm lg:text-base">View Vacant Car</Button>
                        <Button variant={"secondary"} className="p-5 lg:p-6 text-sm lg:text-base">Get In Touch</Button>
                    </div>

                    <div className="flex gap-5 justify-start lg:justify-between">
                        <div>
                            <p className="text-2xl lg:text-3xl font-extrabold">600+</p>
                            <p className="text-xs text-gray-500">Sold Cars</p>
                        </div>
                        <div>
                            <p className="flex gap-2 items-center text-2xl lg:text-3xl font-extrabold">5.0 <Iconify icon="tdesign:star-filled" /></p>
                            <p className="text-xs text-gray-500">Google Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl lg:text-3xl font-extrabold">12 Months</p>
                            <p className="text-xs text-gray-500">Warranty</p>
                        </div>
                    </div>

                </div>

                <div className="hidden lg:block relative w-[50%] h-full rounded-md border border-white overflow-hidden">
                    <Image src="/banner.jpg" alt="Banner Photo" fill className="object-cover" />
                </div>

            </div>
        </section>
    )
}

export default Banner