import Layout from "../layout"
import Grid from "../grid"
import Button from "../button"
import utilStyles from "../../styles/utils.module.css"
import styles from "./location.module.css"
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';

function MapWithAMarker() {
    const handleMarkerClick = () => {
        window.open("https://goo.gl/maps/JDQmxXUEfGR9vTRe7")
    }
    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const center = {lat:34.0203462, lng:-118.9722713}
    const options = { closeBoxURL: '', enableEventPropagation: true };
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
            >
                <>
                <Marker 
                    position={center}
                    clickable={true}
                    onClick={handleMarkerClick}
                />
                <InfoBox
                    options={options}
                    position={center}
                >
                <div className={styles.mapInfoBox}>
                    <div className={styles.mapInfoBoxText}>
                        Kokoro Sushi
                    </div>
                </div>
                </InfoBox>
                </>
            </GoogleMap>
        </LoadScript>
    )
}

const Location = () => {
    return (
        <Layout height="maxContent" className={styles.location} id="location">
            <Grid gap="2rem">
                <h2 className={utilStyles.sectionHeading}>Find Us</h2>
                <Grid gap="1rem">
                    <MapWithAMarker/>
                    <Button type="outlineDark" link="https://goo.gl/maps/JDQmxXUEfGR9vTRe7" newWindow={true}>Get Directions</Button>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Location;