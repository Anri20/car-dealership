import { Car } from "@/lib/generated/prisma"
import ProductItem from "../Product/ProductItem"
import { Button } from "../ui/button"
import Link from "next/link"

interface VacanciesProps {
    products: Car[]
}


const Vacancies = ({ products }: VacanciesProps) => {
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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map((product, i) => (
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