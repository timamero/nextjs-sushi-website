import Layout from '../layout'
import Button from '../button'
import Grid from '../grid'
import styles from './hero.module.css'
import utilStyles from '../../styles/utils.module.css'

const Hero = () => {
    return (
        <Layout height="fullView" className={styles.hero} id="hero">
            <Grid gap="4rem">
                <Grid gap="0">
                    <h1 className={utilStyles.mainHeading}>Kokoro Sushi Bar</h1>
                    <p className={utilStyles.tagline}>Freshest Fish in LA</p>
                </Grid>
                
                <Grid gap="1rem">
                    <Button type="primary">Order Online</Button>
                    <Button type="outline">View Menu</Button>
                </Grid>  
            </Grid>      
        </Layout>
    )
}

export default Hero