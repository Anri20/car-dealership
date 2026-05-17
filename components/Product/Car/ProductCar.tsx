import { Car } from "@/lib/generated/prisma"
import ProductItem from "../ProductItem"

interface ProductCarProps {
    products: Car[]
}

const ProductCar = ({ products }: ProductCarProps) => {
    return (
        <section className="grid grid-cols-2 gap-5">
            {
                products.map((product, i) => (
                    <ProductItem key={i} product={product} />
                ))
            }
        </section>
    )
}

export default ProductCar