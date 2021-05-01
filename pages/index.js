import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cade - Retro Platform</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <img className={styles.logo}
                     src="logo.png"
                     alt="PlayCade Logo"/>
                <h1 className={[styles.title, styles.text].join(" ")}>
                    Hello World, Welcome to Cade
                </h1>
                <p className={styles.text}>Cade is currently in the early stages of development. Come hang on our <a href={"https://github.com/PlayCade"}>Github</a> to find out more</p>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
