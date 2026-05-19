"use client"

import { master_cars } from "@/lib/generated/prisma"
import ProductItem from "../Product/ProductItem"
import Link from "next/link"
import useMediaQuery from "@/hooks/useMediaQuery"

interface VacanciesProps {
    products: master_cars[]
}


const Vacancies = ({ products }: VacanciesProps) => {
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const visibleProducts = isDesktop ? products : products.slice(0, 3)

    return (
        <section className="px-6 py-10 lg:py-20 bg-[#f0f2f4] text-[#0d1b2a]">
            <div className="flex max-w-7xl mx-auto flex-col gap-12">

                {/* Header */}
                <div className="space-y-3">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#0d1b2a]/50 uppercase">
                        VACANCIES
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0d1b2a]">
                        Cars we actually <br />
                        would drive ourselves.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleProducts.map((product, i) => (
                        <ProductItem key={i} product={product} />
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/product/car" className="p-4 border border-gray-500 rounded-lg text-sm tracking-[0.05em]">
                        See All Cars
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Vacancies