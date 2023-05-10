import { useEffect, useState } from "react"
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
    useEffect(()=> {
        setTimeout(()=> {
            const temp = [...products]
            temp.pop();
            products.length && setProducts(temp)
        }, 500)
    }, [products])
    return (
        products.map(item => {
            return (
                <Product item={item} />
            )
        })
    )
}

export default Products;