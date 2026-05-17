import Image from "next/image"
import { Button } from "../ui/button"
import { formatNumber, formatRupiah } from "@/lib/utils"
import Link from "next/link"
import { Separator } from "../ui/separator"

interface ProductItemProps {
    product: any
}

const ProductItem = ({ product }: ProductItemProps) => {
    const CAR_IMAGE = product.car_images[0].url

    return (
        <div className="relative rounded-xl overflow-hidden bg-white shadow-md border border-gray-100 font-sans">
            {/* Image area */}
            <div className="relative aspect-[3/2]">
                <Image
                    src={`/assets/cars/${CAR_IMAGE}`}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
                {/* Type Badge */}
                <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-medium px-2.5 py-1 rounded-md shadow-sm">
                    {product.car_types.name}
                </span>
            </div>

            {/* Content area */}
            <div className="p-4 flex flex-col gap-3">
                {/* Meta info */}
                <div>
                    <p className="text-gray-400 text-xs mb-1">
                        {product.year} · {formatNumber(product.odometer)} km · {product.car_transmissions.name}
                    </p>
                    <p className="text-gray-900 text-base font-bold leading-tight">
                        {product.name}
                    </p>
                </div>

                <Separator />

                {/* Price row */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-gray-400 text-xs mb-0.5">from {formatRupiah(product.credit)}/month</p>
                        <p className="text-gray-900 text-lg font-bold">{formatRupiah(product.price)}</p>
                    </div>
                    <Link
                        href={`/product/cars/slug`}
                        className="text-sm text-[#0c0c0c] bg-gray-100 rounded-md px-5 py-2 hover:bg-[#0c0c0c] hover:text-[#f5f5f5]"
                    >
                        See more →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductItem