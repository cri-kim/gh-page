import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SJ Github blog</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi there, I&apos;m SJ.
        </h1>

        <p className={styles.description}>
          This pages was written by
          <code className={styles.code}>Next.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/tools" >
            <a className={styles.card}>
              <h2>Custom Tools &rarr;</h2>
              <p>필요에 의해서 만든 툴</p>
            </a>
          </Link>

          <Link href="/arts">
            <a className={styles.card}>
              <h2>Readme Decoration &rarr;</h2>
              <p>Github Readme 꾸미기용</p>
            </a>
          </Link>

          <Link href="/portfolio">
            <a
              href="#"
              className={styles.card}
            >
              <h2>Portfolio</h2>
              <p>포트폴리오</p>
            </a>
          </Link>

          <a
            href="https://github.com/cri-kim"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>
              My Source Code Management
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          <a href="https://67crystalk.tistory.com/" target="blank">💻Blog</a>
          <p>✉67crystalk@gmail.com</p>
        </span>
      </footer>
    </div>
  )
}
