import Layout from "../layout";
import Grid from "../grid"
import Button from "../button"
import utilStyles from "../../styles/utils.module.css"
import styles from "./contact.module.css"

const Form = () => {
  return (
    <form className={styles.form}>
      <Grid gap="3rem">
        <Grid gap="1.5rem">
          <Grid type="column" gridTemplate="100px auto" alignItems="center">
            <label>Name:</label>
            <input required/>
          </Grid>
          <Grid type="column" gridTemplate="100px auto" alignItems="center">
            <label>Email:</label>
            <input required/>
          </Grid>
          <Grid type="column" gridTemplate="100px auto" alignItems="center">
            <label>Phone:</label>
            <input required/>
          </Grid>
        </Grid>

        <Grid type="column" gridTemplate="100px auto">
          <label>Message:</label>
          <textarea required></textarea>
        </Grid>
        <Button type="primaryDark">Send</Button>
      </Grid>
    </form>
  )
}

const Contact = () => {
    return (
        <Layout height="maxContent" className={styles.contact} id="contact">
            <Grid gap="2rem">
              <Grid>
                  <h2 className={utilStyles.sectionHeading}>Contact Us</h2>
                  <p className={utilStyles.tagline}>Send us a message!</p>
              </Grid>
              <Form />
            </Grid>
        </Layout>
    )
}

export default Contact;