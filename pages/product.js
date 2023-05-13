import { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import StickyButton from "../components/StickyButton";

const data = [
  {
    id: 0,
    nama: "Product 1ssssssssssssssssssss",
    gambar: "/image/1.jpg",
    deskripsi: "AYYYY",
    price: "15000",
    currency: "IDR",
  },
  {
    id: 1,
    nama: "Product 2",
    gambar: "/image/2.jpg",
    deskripsi: "31ewqewqdqewqe qweq weqeqweqweqweqweqweqweqeq",
    price: "15000",
    currency: "IDR",
  },
  {
    id: 2,
    nama: "Product 3",
    gambar: "/image/3.jpg",
    deskripsi: "AYdasYYY",
    price: "55000",
    currency: "IDR",
  },
  {
    id: 3,
    nama: "Product 4",
    gambar: "/image/41.jpg",
    deskripsi: "AYYYY",
    price: "34000",
    currency: "IDR",
  },
  {
    id: 4,
    nama: "Product 5",
    gambar: "/image/5.jpg",
    deskripsi: "AYYYYdas dasd asd  SADas das ",
    price: "20000",
    currency: "IDR",
  },
];

const Product = ({}) => {
  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (
    productId,
    productNama,
    productAmount,
    productGambar
  ) => {
    const newItem = {
      id:
        addToCart.length === 0
          ? addToCart.length
          : addToCart[addToCart.length - 1].id + 1,
      productId: productId,
      nama: productNama,
      amount: productAmount,
      gambar: productGambar,
    };
    setAddToCart([...addToCart, newItem]);
  };

  const dropFromCart = (id) => {
    const item = addToCart.filter((item) => item.productId !== id);
    setAddToCart(item);
  };

  return (
    <div className="p-4">
      <Head>
        <title>Products</title>
        <meta name="description" content="Products to sell" />
      </Head>
      <div className="flex flex-wrap -m-2 justify-center">
        {data.map((item) => (
          <div key={item.id}>
            <ProductCard
              product={item}
              handleAddToCart={handleAddToCart}
              dropFromCart={dropFromCart}
            />
          </div>
        ))}
      </div>
      <StickyButton itemInCart={addToCart} />
    </div>
  );
};

// export async function getStaticProps(context) {
//   const res = await fetch(`${process.env.DEVELOPMENT_URL}`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default Product;
