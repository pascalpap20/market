import { useEffect, useState } from "react";
import Image from "next/image";

const toMessage = (itemInCart) => {
    let message = []
    for(let i=0 ; i<itemInCart.length ; i++){
        message.push(`${itemInCart[i].nama} x${itemInCart[i].amount}`)
    }
    return message.join().replaceAll(',',`%0D`)
}

const sendMessage="Halo, saya ingin memesan :"

const StickyButton = ({ itemInCart }) => {
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [messageToSend, setMessageToSend] = useState("")

    useEffect(()=>{
        console.log(itemInCart)
        if(itemInCart.length > 0){
            const messageToSend = toMessage(itemInCart)
            setMessageToSend(messageToSend)
        }
    })

    return (
        <div>
            <div className={`${isOpenCart ? `` : `hidden`} flex flex-col fixed bottom-0 right-0 mr-8 mb-24 z-20 bg-primary rounded-lg hover:shadow-2xl w-60  overflow-hidden`}>
                {itemInCart.map(item => 
                <div key={item.id}>
                    <div className="flex justify-between m-1 overflow-hidden">
                        <div className="flex flex-row">
                            <Image src={item.gambar} width={30} height={30} className="rounded-md" objectFit="cover"/>
                            <div className="ml-1 flex flex-col w-9/12">
                                <h2 className="truncate">{item.nama}</h2>
                            </div>
                        </div>
                            <h2>{`x${item.amount}`}</h2>
                        
                        {/* <div className="flex">
                            <button type="button" onClick={()=>dropFromCart(item.productId)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>)}
                { itemInCart.length === 0 ? <div className="p-1">No item in cart</div> : <a href={`https://wa.me/${process.env.NO_TELP}?text=${sendMessage}%0D${messageToSend}`} target="_blank" rel="noreferrer" className="p-1 hover:bg-back">Send via WhatsApp</a>}
            </div>
            <div className="flex flex-col fixed bottom-0 right-0 mr-8 mb-8 z-10 bg-primary rounded hover:shadow-2xl">
                <div className="flex p-4">
                    <button className="text-white cursor-pointer" onClick={()=>setIsOpenCart(!isOpenCart)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                    <h2 className="ml-2 text-white">{itemInCart.length}</h2>
                </div>
            </div>
        </div>
    )
}

export default StickyButton;