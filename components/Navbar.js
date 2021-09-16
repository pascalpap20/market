import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Market Service</title>
        <meta name="description" content="Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className={`flex bg-primary shadow-md justify-between text-white items-center px-4 py-3 md:py-0`}>
          <a className="uppercase text-2xl font-semibold">Market</a>
          <div className={`hidden md:flex items-center`}>
            <Link href="/">
              <a className="block px-4 py-4 hover:bg-danger">Home</a>
            </Link>
            <Link href="/product">
              <a className="block px-4 py-4 hover:bg-danger">Products</a>
            </Link>
            <Link passHref href={`https://wa.me/${process.env.NO_TELP}`}>
              <a target="_blank" className="block px-4 py-4 hover:bg-danger">Contact</a>
            </Link>
          </div>
            <button className="block md:hidden" onClick={()=>setisOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                { isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                 : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
        </div>
        <div className={`${isOpen ? 'md:hidden' : 'hidden'} items-center bg-primary text-white`}>
            <Link href="/">
              <a className="block px-4 py-4 hover:bg-danger">Home</a>
            </Link>
            <Link href="/product">
              <a className="block px-4 py-4 hover:bg-danger">Products</a>
            </Link>
            <Link passHref href={`https://wa.me/${process.env.NO_TELP}`}>
              <a target="_blank" className="block px-4 py-4 hover:bg-danger">Contact</a>
            </Link>
        </div>
      </nav>

    </div>
  )
}