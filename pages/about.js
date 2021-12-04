import Layout from "../components/Layout"
import Link from "next/link"

export default function AboutPage() {
    return (
        <Layout title="About DJ Events" description="Musical">
            <h1>About Page</h1>
            <p>This is an app to find the Latest DJ And other Musical Events</p>
            <p>Version: 1.0.0</p>
            <Link href='/'>Home</Link>
          
        </Layout>
    )
}
