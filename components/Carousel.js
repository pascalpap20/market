import Image from 'next/image'

const CarouselComponent = () => {

    return (
        <>
            <section id="slider">
                <input type="radio" name="slider" id="s1" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s2" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s3" onChange={(e) => e.target.checked}/>
                <input type="radio" name="slider" id="s4" onChange={(e) => e.target.checked} defaultChecked={true}/>
                <input type="radio" name="slider" id="s5" onChange={(e) => e.target.checked}/>

            <label htmlFor="s1" id="slide1">
                <Image src="/image/1.jpg" layout="fill"/>
            </label>

            <label htmlFor="s2" id="slide2">
                <Image src="/image/2.jpg" layout="fill"/>
            </label>

            <label htmlFor="s3" id="slide3">
                <Image src="/image/3.jpg" layout="fill"/>
            </label>

            <label htmlFor="s4" id="slide4">
                <Image src="/image/41.jpg" layout="fill"/>
            </label>

            <label htmlFor="s5" id="slide5">
                <Image src="/image/5.jpg" layout="fill"/>
            </label>

            </section>
        </>
    )
}

export default CarouselComponent