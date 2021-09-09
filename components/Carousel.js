import Image from 'next/image'
import gambar1 from '../image/1.jpg'
import gambar2 from '../image/2.jpg'
import gambar3 from '../image/3.jpg'
import gambar4 from '../image/41.jpg'
import gambar5 from '../image/5.jpg'


const CarouselComponent = () => {

    return (
        <>
            <section id="slider" className="mb-6 md:mb-10">
                <input type="radio" name="slider" id="s1" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s2" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s3" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s4" onChange={(e) => e.target.checked} defaultChecked={true}/>
                <input type="radio" name="slider" id="s5" onChange={(e) => e.target.checked}/>

            <label htmlFor="s1" id="slide1">
                <Image src={gambar1}/>
            </label>

            <label htmlFor="s2" id="slide2">
                <Image src={gambar2}/>
            </label>

            <label htmlFor="s3" id="slide3">
                <Image src={gambar3}/>
            </label>

            <label htmlFor="s4" id="slide4">
                <Image src={gambar4}/>
            </label>

            <label htmlFor="s5" id="slide5">
                <Image src={gambar5}/>
            </label>

            </section>
        </>
    )
}

export default CarouselComponent