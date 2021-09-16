import Image from 'next/image'
import { useEffect, useState } from 'react'


const ProductCard = ({ product, handleAddToCart, dropFromCart }) => {
    const { id, nama, gambar, deskripsi } = product

    const [amountNumber, setAmountNumber] = useState(1)
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const incrementAmount = () => {
        setAmountNumber(amountNumber + 1)
    }

    const decrementAmount = () => {
        if(amountNumber > 1) {
            setAmountNumber(amountNumber - 1)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        dropFromCart(id)
        setIsAddedToCart(!isAddedToCart)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(amountNumber)
        handleAddToCart(id, nama, amountNumber, gambar)
        setIsAddedToCart(!isAddedToCart)
        setAmountNumber(1)
    }

    return (
            <div className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 p-4 bg-secondary m-1">
                <div href="#" className="w-full block h-full">
                    <Image src={gambar} width="300" height="200"/>
                    <div className="w-full">
                        <h3>{nama}</h3>
                        <p className="text-indigo-500 text-md font-medium break-all">
                            {deskripsi}
                        </p>
                    </div>
                    
                    <form className="flex flex-row-reverse mt-2" onSubmit={handleSubmit}>
                        <button className={`${isAddedToCart ? `hidden` : `` } order-4`} onClick={decrementAmount} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                            </svg>
                        </button>
                        
                        <input type="text" className={`${isAddedToCart ? `hidden` : `` } order-3 w-9 px-1`} value={amountNumber} onChange={e => setAmountNumber(parseInt(e.target.value))}/>

                        <button className={`${isAddedToCart ? `hidden` : `` } order-2 mr-1`} onClick={incrementAmount} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                        { isAddedToCart ? 
                        <button className="bg-danger rounded px-2 py-1 text-white  hover:bg-primary" type="button" onClick={handleDrop}>
                            Drop from cart
                        </button>                       
                        : 
                        <button className="bg-primary rounded px-2 py-1 text-white  hover:bg-danger" type="submit">
                            Add to cart
                        </button>
                        }
                    </form>
                </div>
            </div>
    )
}

export default ProductCard;