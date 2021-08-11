import Head from 'next/head'
import Image from 'next/image'
import styles from './pageLayout.module.css'
import utilStyles from '../styles/utils.module.css'
import Nav from './nav'
import Footer from './footer'

const navLinks = [
    {
        id: 1,
        label: "Order Now",
        href: "#",
        isExternal: true
    },
    {
        id: 2,
        label: "View Menu",
        href: "/menu",
        isExternal: false
    },
    {
        id: 3,
        label: "About",
        href: "/#about",
        isExternal: false
    },
    {
        id: 4,
        label: "Location",
        href: "/#location",
        isExternal: false
    },
    {
        id: 5,
        label: "Hours",
        href: "/#hours",
        isExternal: false
    },
    {
        id: 6,
        label: "Contact",
        href: "/#contact",
        isExternal: false
    },
    {
        id: 7,
        label: "Gallery",
        href: "/#gallery",
        isExternal: false
    },
]

const PageLayout = ({ title, children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Kokoro Sushi Bar - Freshest fish in LA" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Merienda:wght@400;700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className={utilStyles.bgWrapper}>
                <Image
                    priority
                    alt="Sushi roll"
                    src="/images/gallery/giants-roll.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className={utilStyles.bgWrapperOverlay}></div>
            <Nav navLinks={navLinks} />
            <main>{children}</main>
            <Footer navLinks={navLinks} />
        </div>
    )
}

export default PageLayout