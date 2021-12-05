import Link from "next/link"
import styles from "@/styles/Footer.module.css"

export default function Footer() {
    return (
        <div>
            <footer className ={styles.footer}>
                <p>Copyyright &copy; DJ Events 2021</p>
                <p>
                    <Link href='/about'>About This Project</Link>
                </p>

            </footer>
            
        </div>
    )
}
