import Head from "next/head"
import styles from "@/styles/Header.module.css"
import Header from './Header'
import Footer from "./Footer"

export default function Layout({title,keywords,description,children}) {
    return (
        <div>
            <Head>
                <title> {title} </title>
                <meta name="description" content="{description}"></meta>
                <meta name="keywords" content="{keywords}"></meta>
            </Head>

            <Header/>
            <div className={styles.container}>
               {children}
            </div>
            <Footer/>
           
        </div>
        
    )
}

Layout.defaultProps ={
    title: 'DJ Events | Find the Hottest Parties',
    description: 'Find the Latest DJ And other Musical Events',
    keywords: 'music,events, dj,edm'

}