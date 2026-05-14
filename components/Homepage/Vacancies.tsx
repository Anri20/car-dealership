import ProductItem from "../ProductItem"

interface VacanciesProps {
    products: []
}


const Vacancies = ({ products }: VacanciesProps) => {
    return (
        <section className="px-6 py-10 lg:py-20 bg-[#f0f2f4] text-[#0d1b2a]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="space-y-3 mb-12">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#0d1b2a]/50 uppercase">
                        VACANCIES
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0d1b2a]">
                        Cars we actually <br />
                        would drive ourselves.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {products.map(product => (
                        <ProductItem product={product} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Vacancies