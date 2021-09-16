// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const productDetail = [
  {
      id: 0,
      nama: "Product 1ssssssssssssssssssss",
      gambar: "/image/1.jpg",
      deskripsi: "AYYYY"
  },{
      id: 1,
      nama: "Product 2",
      gambar: "/image/2.jpg",
      deskripsi: "31ewqewqdqewqe qweq weqeqweqweqweqweqweqweqeq"
  },{
      id: 2,
      nama: "Product 3",
      gambar: "/image/3.jpg",
      deskripsi: "AYdasYYY"
  },{
      id: 3,
      nama: "Product 4",
      gambar: "/image/41.jpg",
      deskripsi: "AYYYY"
  },{
      id: 4,
      nama: "Product 5",
      gambar: "/image/5.jpg",
      deskripsi: "AYYYYdas dasd asd  SADas das "
  }
]

export default function handler(req, res) {
  res.status(200).json({ productDetail })
}
