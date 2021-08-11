import { useCallback } from "react"
import Layout from "../layout"
import Grid from "../grid"
import utilStyles from "../../styles/utils.module.css"
import styles from "./gallery.module.css"
import Image from 'next/image'
import { BsChevronCompactRight } from 'react-icons/bs';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { useEmblaCarousel } from "embla-carousel/react"

const images = [
    {
        id: 1,
        src: '/images/gallery/bento.jpg',
    },
    {
        id: 2,
        src: '/images/gallery/bluefin.jpg',
    },
    {
        id: 3,
        src: '/images/gallery/oyster.jpg',
    },
    {
        id: 4,
        src: '/images/gallery/giants-roll.jpg',
    },
    {
        id: 5,
        src: '/images/gallery/spanish-mackarel.jpg',
    },
    {
        id: 6,
        src: '/images/gallery/sushi-roll.jpg',
    },
    {
        id: 7,
        src: '/images/gallery/sashimi.jpg',
    },
]


// const PhotoCarousel = () => {
//     const [emblaRef] = useEmblaCarousel()

//     return (
//         <div className={styles.embla} ref={emblaRef}>
//             <div className={styles.embla__container}>
//             {images.map(image => (
//                 <div key={image.id} className={styles.embla__slide}>
//                     <Image 
//                             alt="Sushi roll"
//                             src={image.src}
//                             width={400}
//                             height={400}
//                             objectFit="contain"
//                         />
//                 </div>
//              ))}
//             </div>
//         </div>
//     )
// }

const PhotoCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                {images.map(image => (
                    <div key={image.id} className={styles.embla__slide}>
                        <Image 
                                alt="Sushi roll"
                                src={image.src}
                                width={400}
                                height={400}
                                objectFit="contain"
                            />
                    </div>
                ))}
                </div>
            </div>
            <Grid type="column" gridTemplate="30% 30%" justifyContent="center">
                <button className={styles.embla__prev} onClick={scrollPrev}>
                    <BsChevronCompactLeft />
                </button>
                <button className={styles.embla__next} onClick={scrollNext}>
                    <BsChevronCompactRight />
                </button>
            </Grid>
        </div>
    )
}

const Gallery = () => {
    return (
        <Layout height="maxContent" className={styles.gallery} id="gallery">
            <div className={utilStyles.decorWrapper}>
                <Image 
                    eager="true"
                    alt=""
                    src="/decor.png"
                    width={400}
                    height={400}
                    objectFit="contain"
                />
            </div>
            <Grid gap="2rem">
                <h2 className={utilStyles.sectionHeading}>Gallery</h2>
                <PhotoCarousel />
                
            </Grid>
        </Layout>
    )
}

export default Gallery;