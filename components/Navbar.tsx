"use client"

import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
    { label: "Cars", href: "/product/car" },
    { label: "Trade-In", href: "/trade-in" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed w-full top-0 z-50 px-6 bg-[#101926] transition-all duration-300",
                scrolled ? "shadow-md border-b border-gray-600" : ""
            )}
        >
            <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold uppercase">
                    <span className="tracking-[0.15em]">Auto</span>
                    <span className="text-[#97d9f0] tracking-[0.15em]">Kraft</span>
                </Link>

                {/* Radix NavigationMenu */}
                <NavigationMenu.Root className="hidden lg:flex items-center gap-6">
                    <NavigationMenu.List className="flex items-center gap-6 list-none m-0 p-0">
                        {navLinks.map(({ label, href }) => (
                            <NavigationMenu.Item key={href}>
                                <NavigationMenu.Link asChild>
                                    <Link
                                        href={href}
                                        className="text-sm text-gray-300 hover:text-[#97d9f0] transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        ))}

                        {/* CTA Button */}
                        <NavigationMenu.Item>
                            <NavigationMenu.Link asChild>
                                <Link
                                    href="/sell"
                                    className="bg-[#97d9f0] text-[#101926] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#6ecae6] transition-colors"
                                >
                                    Sell Your Car
                                </Link>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </div>
        </header>
    )
}

export default Navbar