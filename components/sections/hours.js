import Image from 'next/image'
import Layout from "../layout";
import Grid from "../grid"
import utilStyles from "../../styles/utils.module.css"
import styles from "./hours.module.css"
// import { GoLocation } from 'react-icons/go';
// import { AiOutlinePhone } from 'react-icons/ai'

const Hours = () => {
    const openHours = [
        {
            id: 1,
            day: 'Monday to Thursday',
            lunch: '11:00AM - 1:30PM',
            dinner: '4:30PM - 9:00PM'
        },
        {
            id: 2,
            day: 'Friday',
            lunch: '11:00AM - 1:30PM',
            dinner: '4:30PM - 9:30PM'
        },
        {   
            id: 3,
            day: 'Saturday',
            lunch: '11:00AM - 1:30PM',
            dinner: '4:30PM - 9:00PM'
        },
        {
            id: 4,
            day: 'Sunday',
            dinner: '4:30PM - 9:00PM'
        },
    ]

    const hourColumnTemplate = "auto max-content"

    return (
        <Layout height="maxContent" className={styles.hours} id="hours">
            <div className={utilStyles.decorWrapper}>
                <Image 
                    alt=""
                    src="/decor.png"
                    width={400}
                    height={400}
                    objectFit="contain"
                />
            </div>
            <Grid gap="2rem">
                <Grid>
                    <h2 className={utilStyles.sectionHeading}>Hours</h2>
                    <p className={utilStyles.tagline}>Come visit us</p>
                </Grid>
                {openHours.map(item => (
                    <Grid key={item.id} justifyContent="center">
                        <p className={styles.day}>{item.day}</p>
                        <Grid>
                            {item.lunch && (
                                <Grid type="column" gridTemplate={hourColumnTemplate} alignItems="center">
                                    <p className={styles.hourLabel}>Lunch</p>
                                    <p className={styles.hour}>{item.lunch}</p>
                                </Grid>   
                            )}
                            {item.dinner && (
                                <Grid type="column"  gridTemplate={hourColumnTemplate} alignItems="center">
                                    <p className={styles.hourLabel}>Dinner</p>
                                    <p className={styles.hour}>{item.dinner}</p>
                                </Grid>   
                            )}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export default Hours;