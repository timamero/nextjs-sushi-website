import Layout from "../layout";
import Grid from "../grid"
import utilStyles from "../../styles/utils.module.css"
import styles from "./about.module.css"
import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai'

const About = () => {
    return (
        <Layout height="maxContent" className={styles.about} id="about">
            <Grid gap="2rem">
                <Grid gap="2rem">
                    <Grid>
                        <h2 className={utilStyles.sectionHeading}>Great Sushi and Service</h2>
                        <p className={utilStyles.tagline}>Experience the freshest fish in Los Angeles</p>
                    </Grid>
                    <p className={utilStyles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum leo nec augue pharetra mollis. Duis interdum placerat efficitur. Aenean ac arcu pretium, mollis dolor a, fermentum sapien. In consectetur faucibus massa. Etiam blandit accumsan neque sit amet hendrerit. Praesent vitae sollicitudin enim. Nulla ut congue neque, ac mattis odio. Mauris ornare ligula elementum, porta velit nec, tincidunt justo. Curabitur.</p>
                </Grid>
                <Grid>
                    <Grid type="column" gridTemplate="max-content auto">
                        <a href="https://goo.gl/maps/JDQmxXUEfGR9vTRe7" target="_blank" rel="noreferrer"><GoLocation className={styles.icon}/></a>
                        <p className={utilStyles.infoText}>123 Main St, Los Angeles, CA 123456</p>
                    </Grid>
                    <Grid type="column" gridTemplate="max-content auto">
                        <a href=""><AiOutlinePhone className={styles.icon}/></a>
                        <p className={utilStyles.infoText}>123-456-7891</p>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default About;