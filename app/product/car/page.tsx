import FilterCar from "@/components/Product/Car/FilterCar"
import ProductCar from "@/components/Product/Car/ProductCar"
import SortCar from "@/components/Product/Car/SortCar";
import { prisma } from "@/lib/prisma"

interface CarPageProps {
    searchParams: Promise<{
        search?: string | undefined;
        fuel?: string | undefined;
        transmission?: string | undefined;
        price?: string | undefined;
        mileage?: string | undefined;
        sort?: string | undefined;
    }>
}

const SORT_MAP: Record<string, object> = {
    "newest": {created_at: "desc"},
    "price_low": {price: "asc"},
    "price_high": {price: "desc"},
    "km_low": {odometer: "asc"},
}

export default async function CarPage({ searchParams }: CarPageProps) {
    const params = await searchParams

    const fuels = params.fuel?.split(",")

    const transmissions = params.transmission?.split(",")

    const [cars, carTypes, carTransmissions] = await Promise.all([
        prisma.master_cars.findMany({
            where: {
                ...(params.search && {
                    name: { contains: params.search },
                }),
                ...(fuels && fuels.length > 0 && {
                    car_types: { name: { in: fuels } },
                }),
                ...(transmissions && transmissions.length > 0 && {
                    car_transmissions: { name: { in: transmissions } },
                }),
                ...(params.price && {
                    price: { lte: Number(params.price) },
                }),
                ...(params.mileage && {
                    odometer: { lte: Number(params.mileage) },
                })
            },
            include: {
                car_types: { select: { name: true } },
                car_transmissions: { select: { name: true } },
                car_images: { select: { url: true } },
            },
            ...(params.sort && {
                orderBy: SORT_MAP[params.sort],
            })
        }),
        prisma.car_types.findMany({ select: { name: true } }).then((t) => t.map((x) => x.name)),
        prisma.car_transmissions.findMany({ select: { name: true } }).then((t) => t.map((x) => x.name)),
    ]);

    // Always compute stats from unfiltered data
    const allCars = await prisma.master_cars.findMany({ select: { price: true, odometer: true } });
    const stats = allCars.reduce(
        (acc, car) => ({
            maxPrice: Math.max(acc.maxPrice, car.price),
            maxOdometer: Math.max(acc.maxOdometer, car.odometer),
        }),
        { maxPrice: -Infinity, maxOdometer: -Infinity }
    );

    return (
        <main className="pt-24 pb-12 bg-[#f0f2f4]">
            <div className="flex max-w-7xl mx-auto gap-10 items-start">
                <FilterCar
                    types={carTypes}
                    transmissions={carTransmissions}
                    maxPrice={stats.maxPrice}
                    maxOdometer={stats.maxOdometer}
                />
                <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h2 className="text-4xl text-[#0d1b2a] font-semibold">Vacancies</h2>
                            <p className="ps-1 text-[#0d1b2a]/50">{cars.length} {`car${cars.length > 2 ? "s" : ""}`} available</p>
                        </div>
                        <SortCar />
                    </div>
                    <ProductCar products={cars} />
                </div>
            </div>
        </main>
    )
}