"use client"

import Link from "next/link"
import Iconify from "../Iconify"
import useMediaQuery from "@/hooks/useMediaQuery"
import { master_cars } from "@/lib/generated/prisma"

interface Review {
    name: string,
    text: string
}

const reviews = [
    { name: "Marte K.", text: "Bought a car without seeing it physically. Come exactly as it was described. Isaac responded to all messages within minutes. Recommended!" },
    { name: "Thomas B.", text: "No pressure, just good help. Took the time to think about it, and they were there when I was ready. This is how it should be." },
    { name: "Kristine H.", text: "Sold my car on the day. Simple, fast and honest price. I wish all my car transactions were like that." },
    { name: "Ole Peter S.", text: "I bought a car many times. This was clearly the best experience. Professional, nice and honest. coming back." },
    { name: "Anette M.", text: "Got help with funding the same day and drove home in a new car. Incredibly agile process from start to finish!" },
    { name: "Bjørn E.", text: "Isak is quite a guy. Took the time to explain everything, no bustle. I recommend Autofjord to everyone I know." },
]

const totalReview = 85

const Stars = () => (
    <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <Iconify key={i} icon="material-symbols:star" className="text-[#f59e0b]" />
        ))}
    </div>
)

const GoogleReviews = () => {
    const isMobile = useMediaQuery("(max-width: 512px)")
    const isMobileLandscape = useMediaQuery("(max-width: 1024px)")

    const visibleReviews = (products: Review[]) => {
        if (isMobile) {
            return products.slice(0, 3)
        }

        if (isMobileLandscape) {
            return products.slice(0, 4)
        }

        return products
    }

    return (
        <section className="px-6 sm:px-12 py-10 lg:py-20 bg-[#101926] text-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">

                {/* Summary banner */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10 rounded-xl px-8 py-6 mb-12">
                    <div className="space-y-2">
                        <Stars />
                        <h2 className="text-2xl lg:text-3xl font-black">5.0 out of 5 on Google.</h2>
                        <p className="text-sm text-[#f5f5f5]/40">
                            One of Surabaya's most frequently reviewed used car dealerships — and we're not finished yet.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="w-full lg:w-fit shrink-0 px-5 py-3 rounded-md bg-[#97d9f0] text-[#101926] text-sm font-semibold text-center  hover:bg-[#6ecae6] transition-colors whitespace-nowrap"
                    >
                        Read all {totalReview} reviews →
                    </Link>
                </div>

                {/* Review cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleReviews(reviews).map((review) => (
                        <div
                            key={review.name}
                            className="bg-[#162030] border border-white/10 rounded-xl p-6 flex flex-col gap-4"
                        >
                            <Stars />
                            <p className="text-sm text-[#f5f5f5]/80 leading-relaxed flex-1">
                                "{review.text}"
                            </p>
                            <p className="text-sm text-[#f5f5f5]/40">- {review.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default GoogleReviews