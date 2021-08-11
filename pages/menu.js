import Link from 'next/link'
import PageLayout from '../components/pageLayout'

const Menu = () => {
    return (
        <PageLayout title="Kintaro - Menu">
            
            <Link href="/">
                <a>Home</a>
            </Link>

            <h1>Menu</h1>
        </PageLayout>
    )
}

export default Menu