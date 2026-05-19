"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { formatNumber, formatRupiah } from "@/lib/utils";

interface FilterCarProps {
    types: string[];
    transmissions: string[];
    maxOdometer: number;
    maxPrice: number;
}

const FilterCar = ({ types, transmissions, maxPrice, maxOdometer }: FilterCarProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    const [search, setSearch] = useState(searchParams.get("search") ?? "");
    const [fuels, setFuels] = useState<string[]>(searchParams.get("fuel")?.split(",") ?? []);
    const [transmission, setTransmissions] = useState<string[]>(searchParams.get("transmission")?.split(",") ?? []);
    const [price, setPrice] = useState(Number(searchParams.get("price")) || maxPrice);
    const [mileage, setMileage] = useState(Number(searchParams.get("mileage")) || maxOdometer);


    const isFiltered =
        searchParams.has("search") ||
        searchParams.has("fuel") ||
        searchParams.has("transmission") ||
        searchParams.has("sort") ||
        (searchParams.has("maxPrice") && Number(searchParams.get("maxPrice")) < maxPrice) ||
        (searchParams.has("maxOdometer") && Number(searchParams.get("maxOdometer")) < maxOdometer)


    function toggleFuel(fuel: string) {
        setFuels((prev) =>
            prev.includes(fuel) ? prev.filter((f) => f !== fuel) : [...prev, fuel]
        );
    }

    function toggleTransmission(t: string) {
        setTransmissions((prev) =>
            prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
        );
    }


    function applyFilter() {
        const params = new URLSearchParams();

        if (search) params.set("search", search);
        if (fuels.length > 0) params.set("fuel", fuels.join(","))
        if (transmission.length > 0) params.set("transmission", transmission.join(","))
        params.set("price", String(price));
        params.set("mileage", String(mileage));

        router.push(`?${params.toString()}`);
    }

    function resetFilter() {
        setSearch("");
        setFuels([]);
        setTransmissions([]);
        setPrice(maxPrice);
        setMileage(maxOdometer);
        router.push("?");
    }


    // Filter: Apply on Enter; Reset on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") applyFilter()

            if (e.key === "Escape") resetFilter()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [search, fuels, transmission, price, mileage])


    return (
        <aside className="flex w-3xs p-6 flex-col gap-6 border border-gray-200 rounded-xl bg-white text-sm shrink-0">
            <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-900">Filter</p>
                {
                    isFiltered
                        ? <Button variant={"outline"} className="text-[#0d1b2a]" onClick={resetFilter}>Reset</Button>
                        : null
                }
            </div>

            {/* Search */}
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Search</p>
                <Input
                    className="text-gray-600"
                    placeholder="Brand or model..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Separator />

            {/* Fuel */}
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Fuel</p>
                <div className="flex flex-col gap-3">
                    {types.map((_type) => (
                        <div key={_type} className="flex items-center gap-2.5">
                            <Checkbox
                                id={`type-${_type}`}
                                className="border border-gray-500 cursor-pointer"
                                checked={fuels.includes(_type)}
                                onCheckedChange={() => toggleFuel(_type)}
                            />
                            <Label htmlFor={`type-${_type}`} className="text-gray-600 font-normal cursor-pointer">
                                {_type}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Transmission */}
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">Transmission</p>
                <div className="flex flex-col gap-3">
                    {transmissions.map((_transmission) => (
                        <div key={_transmission} className="flex items-center gap-2.5">
                            <Checkbox
                                id={`transmission-${_transmission}`}
                                className="border border-gray-500 cursor-pointer"
                                checked={transmission.includes(_transmission)}
                                onCheckedChange={() => toggleTransmission(_transmission)}
                            />
                            <Label htmlFor={`transmission-${_transmission}`} className="text-gray-600 font-normal cursor-pointer">
                                {_transmission}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Max Price */}
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Max price</p>
                <div className="flex justify-between items-baseline mb-3">
                    <span className="text-gray-400 text-xs">Rp 0</span>
                    <span className="text-gray-900 font-semibold">{formatRupiah(price)}</span>
                </div>
                <Slider
                    className="cursor-pointer"
                    min={0}
                    max={maxPrice}
                    step={1000}
                    value={[price]}
                    onValueChange={([val]) => setPrice(val)}
                />
            </div>

            <Separator />

            {/* Max Mileage */}
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Maximum mileage</p>
                <div className="flex justify-between items-baseline mb-3">
                    <span className="text-gray-400 text-xs">0 km</span>
                    <span className="text-gray-900 font-semibold">{formatNumber(mileage)} km</span>
                </div>
                <Slider
                    className="cursor-pointer"
                    min={0}
                    max={maxOdometer}
                    step={1000}
                    value={[mileage]}
                    onValueChange={([val]) => setMileage(val)}
                />
            </div>

            <Separator />

            <Button className="w-full" onClick={applyFilter}>Apply Filter</Button>
        </aside>
    );
};

export default FilterCar;