import Image from "next/image"
import { Button } from "./ui/button"

interface ProductItemProps {
    product: any
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div>
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="h-full w-auto"
            />
            <div>
                <p>{product.year} · {product.odometer}km · {product.type}</p>
                <p>{product.name}</p>
            </div>
            <hr />
            <div>
                <div>
                    <p>{product.credit}</p>
                    <p>{product.price}</p>
                </div>
                <Button>
                    See More →
                </Button>
            </div>
        </div>
    )
}

export default ProductItem