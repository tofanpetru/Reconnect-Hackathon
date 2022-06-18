import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        header
      </Head>

      <main className={styles.main}>
       landing content
      </main>

      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  )
}
