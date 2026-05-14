const features = [
    {
        number: "01",
        title: "Warranty as standard",
        description: "12 months warranty on the engine and drivetrain. Not as an addition — as part of the price of all the cars we sell.",
    },
    {
        number: "02",
        title: "We know every car",
        description: "We sell 30–40 cars a month. Not 300. We've been driving and checking every single one ourselves.",
    },
    {
        number: "03",
        title: "Buy without meeting us",
        description: "We offer video viewing for customers who want it. Watch the car live on video, ask questions, and make a safe decision — without traveling anywhere.",
    },
    {
        number: "04",
        title: "We'll take the phone",
        description: "Four permanent people. You always talk to one of us — never with a hired support chat.",
    },
]

const WhyUs = () => {
    return (
        <section className="px-6 py-10 lg:py-20 bg-[#101926] text-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="space-y-5 mb-8 lg:mb-16">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#97d9f0] uppercase">
                        Why Autokraft
                    </p>
                    <h2 className="text-4xl/12 lg:text-5xl/16 font-black">
                        No pressure.<br />No nonsense.
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {features.map((f) => (
                        <div key={f.number} className="py-8 lg:py-12 lg:gap-16 lg:px-14 border-t border-white/10">
                            <div className="grid grid-cols-8 items-center gap-y-2">
                                <span className="text-xs font-bold text-[#97d9f0] mt-1 shrink-0">
                                    {f.number}
                                </span>
                                <h3 className="col-span-7 text-2xl font-bold text-[#f5f5f5]">{f.title}</h3>
                                <div></div>
                                <p className="col-span-7 text-sm text-[#f5f5f5]/50 leading-relaxed">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </section >
    )
}

export default WhyUs