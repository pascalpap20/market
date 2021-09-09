import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import StickyButton from '../components/StickyButton'
import gambar1 from '../image/1.jpg'
import gambar2 from '../image/2.jpg'
import gambar3 from '../image/3.jpg'
import gambar4 from '../image/41.jpg'
import gambar5 from '../image/5.jpg'

const productDetail = [
    {
        id: 0,
        nama: "Product 1ssssssssssssssssssss",
        gambar: gambar1,
        deskripsi: "AYYYY"
    },{
        id: 1,
        nama: "Product 2",
        gambar: gambar2,
        deskripsi: "31ewqewqdqewqe qweq weqeqweqweqweqweqweqweqeq"
    },{
        id: 2,
        nama: "Product 3",
        gambar: gambar3,
        deskripsi: "AYdasYYY"
    },{
        id: 3,
        nama: "Product 4",
        gambar: gambar4,
        deskripsi: "AYYYY"
    },{
        id: 4,
        nama: "Product 5",
        gambar: gambar5,
        deskripsi: "AYYYYdas dasd asd  SADas das "
    }
]

const product = () => {
    const [addToCart, setAddToCart] = useState([])

    const handleAddToCart = (productId, productNama, productAmount, productGambar) => {
        const newItem = {
            id: addToCart.length === 0 ? addToCart.length : addToCart[addToCart.length-1].id + 1,
            productId: productId,
            nama: productNama,
            amount: productAmount,
            gambar: productGambar
        }
        setAddToCart([...addToCart, newItem])
    }

    const dropFromCart = (id) => {
        const item = addToCart.filter(item => item.productId !== id)
        setAddToCart(item)
    }

    useEffect(()=>{
        console.log(addToCart)
    })

    return (
        <div className="p-4">
            <div className="flex flex-wrap -m-2 justify-center">
                {productDetail.map(item => (
                    <div key={item.id}>
                        <ProductCard product={item} handleAddToCart={handleAddToCart} dropFromCart={dropFromCart}/>
                    </div>
                ))}
            </div>
            <StickyButton itemInCart={addToCart}/>
        </div>
    )
}

export default product;