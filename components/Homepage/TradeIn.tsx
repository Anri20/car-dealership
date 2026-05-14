import { ArrowRight, ArrowLeftRight, CircleCheckBig } from "lucide-react"
import Link from "next/link"

const features = [
    "Free pickup and delivery",
    "Payment the same day",
    "No hidden deductions",
    "We take care of the paperwork",
]

const options = [
    {
        icon: <ArrowLeftRight className="w-4 h-4 text-teal-700" />,
        title: "Trade-in",
        description: "I want to change my car for a new one at AutoFjord",
        href: "#",
    },
    {
        icon: <ArrowRight className="w-4 h-4 text-teal-700" />,
        title: "Only sales",
        description: "I just want to sell my car, without buying anything new",
        href: "#",
    },
]

const TradeIn = () => {
    return (
        <section className="px-6 py-10 lg:py-20 bg-[#101926]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#97d9f0] uppercase">
                            Sell or Replace
                        </p>
                        <h2 className="text-4xl lg:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight tracking-tight">
                            Sell the car<br />to us.
                        </h2>
                        <p className="text-[#8a9bb0] text-sm leading-relaxed max-w-sm">
                            We'll give you an offer within 24 hours. Money on the day,
                            no complaint, pick-up at the door.
                        </p>
                    </div>

                    <ul className="space-y-3">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-[#c5d0db]">
                                <CircleCheckBig className="w-5 h-5 text-teal-400 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Card */}
                <div className="w-full lg:w-[26rem] bg-[#f5f5f5] rounded-2xl p-8 space-y-5 shadow-2xl">
                    <div className="space-y-1">
                        <h3 className="text-[#101926] text-xl font-bold">
                            What do you want?
                        </h3>
                        <p className="text-sm text-[#6b7a8d]">
                            Choose what's right for you — we'll customize the form automatically.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {options.map((option) => (
                            <Link
                                key={option.title}
                                href={option.href}
                                className="flex items-center gap-4 p-4 border border-[#e5e9ed] rounded-xl hover:border-teal-400 hover:shadow-sm transition-all group"
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#d5efec] flex items-center justify-center shrink-0">
                                    {option.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-[#101926]">
                                        {option.title}
                                    </p>
                                    <p className="text-xs text-[#6b7a8d]">
                                        {option.description}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#101926] shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    )
}

export default TradeIn