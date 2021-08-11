import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './layout'
import Grid from './grid'
import styles from './footer.module.css'
import utilStyles from "/styles/utils.module.css"
import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai'

const Footer = ({ navLinks }) => {
    return (
      <Layout height="fullView" className={styles.footer} id="footer">
        <Grid gap="2rem">
          <ul className={styles.navLinkContainer}>
          {navLinks.map(link => (
              <li key={link.id} className={styles.navLink}>
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
          <Grid justifyContent="center">
            <Grid type="column" gridTemplate="max-content auto">
                <a href="https://goo.gl/maps/JDQmxXUEfGR9vTRe7" target="_blank" rel="noreferrer"><GoLocation className={styles.icon}/></a>
                <p className={utilStyles.infoText}>123 Main St, Los Angeles, CA 123456</p>
            </Grid>
            <Grid type="column" gridTemplate="max-content auto">
                <a href=""><AiOutlinePhone className={styles.icon}/></a>
                <p className={utilStyles.infoText}>123-456-7891</p>
            </Grid>
          </Grid>
          <Grid>
            <div className={styles.logoWrapper}>
              <Link href="/#">
                  <a className={styles.logoLink}>
                      <Image
                          alt="Kokoro Sushi Bar"
                          src="/namelogo-white.svg" 
                          width={90}
                          height={32}
                      />
                  </a>
              </Link>
            </div>
            <p className={`${utilStyles.tagline} ${utilStyles.centerText}`}>Our restaurant features a sushi bar, nigiri, sashimi & specialty rolls.</p>
          </Grid>
        </Grid>
      </Layout>
    )
}

export default Footer