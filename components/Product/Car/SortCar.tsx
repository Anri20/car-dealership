"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"

const SortCar = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    function applySort(sort: string) {
        const params = new URLSearchParams()

        if (sort) params.set("sort", sort)

        router.push(`?${params.toString()}`)
    }

    return (
        <div className="flex items-center gap-2 text-[#101926]">
            <p>Sort</p>
            :
            <Select
                defaultValue={searchParams.get("sort") ?? ""}
                onValueChange={(value) => applySort(value)}
            >
                <SelectTrigger className="w-44 bg-white border-[#0d1b2a]/20 text-[#0d1b2a] cursor-pointer">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="cursor-pointer" value="newest">Newest First</SelectItem>
                    <SelectItem className="cursor-pointer" value="price_low">Lowest Price</SelectItem>
                    <SelectItem className="cursor-pointer" value="price_high">Highest Price</SelectItem>
                    <SelectItem className="cursor-pointer" value="km_low">Lowest KM</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SortCar