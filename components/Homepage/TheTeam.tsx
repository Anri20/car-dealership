import Image from "next/image"

const teamData = [
    { name: "Isak", job_title: "General Manager", job_desc: "Taking care of the long-term — ads, website, customer experience and new strategies.", image: "/team/isak.jpg" },
    { name: "Rikard", job_title: "General Manager", job_desc: "Sitting on shopping and selling and running much of the daily. Know every car we have in stock.", image: "/team/rikard.jpg" },
    { name: "Henrik", job_title: "Logistics & Partners", job_desc: "Coordinates workshop, varnish and shipping. Keeping the wheels going — literally.", image: "/team/henrik.jpg" },
    { name: "Heine", job_title: "Preparation & All-Possible", job_desc: "Polishes, prepare and fix most of it. Not much that stops him.", image: "/team/heine.jpg" },
]

const TheTeam = () => {
    return (
        <section className="px-6 py-10 lg:py-20 bg-[#f0f2f4] text-[#0d1b2a]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="space-y-3 mb-12">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#0d1b2a]/50 uppercase">
                        The Team
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0d1b2a]">
                        Four people. <br className="block lg:hidden" />
                        Two daily leaders. <br />
                        Everyone steps into sales.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {teamData.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white rounded-xl overflow-hidden shadow-sm"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full bg-[#ccdde6]">
                                <Image
                                    src={member.image || ""}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="text-lg text-[#0d1b2a] font-extrabold ">{member.name}</h3>
                                <p className="mb-2.5 text-xs font-medium text-[#2a6c85]">{member.job_title}</p>
                                <p className="hidden lg:block text-sm text-[#0d1b2a]/60 leading-relaxed pt-1">{member.job_desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TheTeam