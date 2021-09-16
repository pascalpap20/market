import { useEffect, useState } from 'react'
import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import StickyButton from '../components/StickyButton'

const Product = ({ data }) => {
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
        console.log(data)
    })

    return (
        <div className="p-4">
            <Head>
                <title>Products</title>
                <meta name="description" content="Products to sell" />
            </Head>
            <div className="flex flex-wrap -m-2 justify-center">
                {data.productDetail.map(item => (
                    <div key={item.id}>
                        <ProductCard product={item} handleAddToCart={handleAddToCart} dropFromCart={dropFromCart}/>
                    </div>
                ))}
            </div>
            <StickyButton itemInCart={addToCart}/>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.DEVELOPMENT_URL}`)
    const data = await res.json()
    
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }


export default Product;