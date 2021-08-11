import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './nav.module.css'

const Nav = ({ navLinks }) => {
    const [ menuToggle, setMenuToggle ] = useState(false)
    
    const handleHamburgerClick = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <div className={styles.navWrapper}>
            <nav className={styles.nav}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <a className={styles.logoLink}>
                            <Image
                                alt="Kokoro Sushi Bar"
                                src="/namelogo.svg" 
                                width={90}
                                height={32}
                            />
                        </a>
                    </Link>
                </div>
                <div className={menuToggle ? `${styles.navLinksWrapper} ${styles.showNav}` : `${styles.navLinksWrapper}`} id="navLinksWrapper">
                   <ul className={menuToggle ? `${styles.navLinks} ${styles.showNavLinks}` : `${styles.navLinks}`}>
                        {navLinks.map(link => (
                            <li key={link.id} className={styles.navLink} onClick={handleHamburgerClick}>
                                {!link.isExternal ? (
                                    <Link href={link.href}>
                                        <a>{link.label}</a>
                                    </Link>
                                ) : (
                                    <a href={link.href}>{link.label}</a>
                                )}          
                            </li>
                        ))}              
                    </ul> 
                </div>
                <div className={styles.hamburgerWrapper} id="hamburger" onClick={handleHamburgerClick}>
                    <div className="hamburger">
                        <div className={menuToggle ? `${styles.bar1} ${styles.closeBar1}` : `${styles.bar1}`} id="bar1"></div>
                        <div className={menuToggle ? `${styles.bar2} ${styles.closeBar2}` : `${styles.bar2}`} id="bar2"></div>
                        <div className={menuToggle ? `${styles.bar3} ${styles.closeBar3}` : `${styles.bar3}`} id="bar3"></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav