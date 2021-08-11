import PageLayout from '../components/pageLayout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Hours from '../components/sections/hours'
import Location from '../components/sections/location'
import Gallery from '../components/sections/gallery'
import Contact from '../components/sections/contact'

export default function Home() {
  return (
    <PageLayout title="Kintaro">
      <Hero />
      <About />
      <Hours />
      <Location/>
      <Gallery />
      <Contact />
    </PageLayout>

  )
}
