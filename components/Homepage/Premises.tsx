import { cn } from "@/lib/utils"
import Image from "next/image"

const premises = [
    { image: "/premise/The team outside the showroom.jpg", alt: "The team outside the showroom", className: "col-span-2 lg:col-span-1 lg:row-span-2" },
    { image: "/premise/Customer advice.jpg", alt: "Customer advice" },
    { image: "/premise/Handshake on car delivery.jpg", alt: "Handshake on car delivery" },
    { image: "/premise/Car review.jpg", alt: "Car review" },
    { image: "/premise/Satisfied customer.jpg", alt: "Satisfied customer" },
]

const Premises = () => {
    return (
        <section className="px-6 sm:px-12 py-10 lg:py-20 bg-[#f0f2f4] text-[#101926]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="space-y-3 mb-12">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#101926]/50 uppercase">
                        From The Premises
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tighter text-[#101926]">
                        This is what it looks like
                        with us.
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[12.5rem] gap-5">
                    {premises.map((premise, i) => (
                        <div key={i} className={cn("relative h-full w-auto rounded-md border border-black", premise.className || "")}>
                            <Image src={premise.image} alt={premise.alt} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Premises