"use client"

const Footer = () => {
    const currentYear = new Date().toLocaleDateString("en-US", {
        timeZone: "Asia/Jakarta",
        year: "numeric",
    })

    return (
        <footer
            className="py-5 bg-[#101926] text-white sticky"
        >
            <p className="text-xs lg:text-base text-[#f5f5f5] text-center">Copyright © {currentYear}. Henri Jayanata Kusuma. All rights reserved.</p>
        </footer>
    )
}

export default Footer