import { useEffect, useState } from "react"
import CreateProduct from "./create-product"
import Product from "./product"

const data = [{
    name: "apple",
    price: 2000
},
{
    name: "apple -2",
    price: 300
},
{
    name: "apple -3",
    price: 20
},
{
    name: "apple -4",
    price: 2
},
{
    name: "apple -5",
    price: 4
},
{
    name: "apple -6",
    price: 5
}]
const Products = () => {
    const [products, setProducts] = useState(data)
    const createProduct = (p) => {
        setProducts([...products, p])
    }

    return (
        <>
            <CreateProduct createProduct={createProduct}/>
            {products.map(item => {
                return (
                    <Product item={item} />
                )
            })}
        </>
        
    )
}

export default Products;