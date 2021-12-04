import Head from "next/head"
import styles from "../styles/Layout.module.css"

export default function Layout({title,keywords,description,children}) {
    return (
        <div>
            <Head>
                <title> {title} </title>
                <meta name="description" content="{description}"></meta>
                <meta name="keywords" content="{keywords}"></meta>
            </Head>

            <div className={styles.container}>
               {children}
            </div>
           
        </div>
        
    )
}

Layout.defaultProps ={
    title: 'DJ Events | Find the Hottest Parties',
    description: 'Find the Latest DJ And other Musical Events',
    keywords: 'music,events, dj,edm'

}