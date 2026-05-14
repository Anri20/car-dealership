const contactDetails = [
    {
        label: "Address",
        lines: ["Address 1-5, City, Postcode"],
    },
    {
        label: "Phone",
        lines: ["xxx xx xxx"],
    },
    {
        label: "Email",
        lines: ["Full.Name@autokraft.com"],
    },
    {
        label: "Opening Hours",
        lines: [
            "Mon-Fri: 08:00-18:00",
            "Sat-Sun: 10:00-17:00",
        ],
        note: "Everything else by appointment — we are flexible."
    },
]

const VisitUs = () => {
    const address = "Jl. Taman Asri Selatan No.48, Tambaksari, Tambakrejo, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256"
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

    return (
        <section className="px-6 py-10 lg:py-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">

                {/* Left */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#101926]/50 uppercase">
                            Visit Us
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#101926] leading-tighter tracking-tight">
                            Stop by for<br />a coffee and a look.
                        </h2>
                        <p className="text-sm text-[#6b7a8d]">
                            Call you first so we can get the car ready for you.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {contactDetails.map((item) => (
                            <div key={item.label} className="space-y-0.5">
                                <p className="text-[10px] font-bold tracking-[0.1em] text-[#101926]/50 uppercase">
                                    {item.label}
                                </p>
                                {item.lines.map((line) => (
                                    <p key={line} className="text-sm text-black">
                                        {line}
                                    </p>
                                ))}
                                {item.note && <p className="text-sm text-[#101926]/50">{item.note}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Map */}
                <div className="w-full lg:w-[440px] aspect-square rounded-2xl overflow-hidden border border-[#e5e9ed] shadow-sm">
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AutoFjord location"
                    />
                </div>

            </div>
        </section>
    )
}

export default VisitUs