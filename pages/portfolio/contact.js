import styles from '../../styles/Portfolio.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
        <h3 className="float-md-start mb-0"><i><Link href="/portfolio"><a>sj.Kim</a></Link></i></h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link href="/portfolio/about"><a className="nav-link" aria-current="page" href="#">About</a></Link>
            <Link href="/portfolio/skill"><a className="nav-link" aria-current="page" href="#">Experience & Skill</a></Link>
            <Link href="/portfolio/contact"><a className="nav-link" aria-current="page" href="#">Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className={styles.main} > 
        <div className="p-5 mb-4 bg-light rounded-3">
            하단에 있어요.
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            3d js 도 공부해보고싶어요.
          </div>
          <div className="col-md-6">
            js 게임도 넣어볼까 생각중이에요.
          </div>
        </div>
      </main>
      
      </div>
      <footer className={styles.footer}>
        <span>
          <a href="https://67crystalk.tistory.com/" target="blank">💻Blog</a>
          <p>✉67crystalk@gmail.com</p>
        </span>
      </footer>
    </div>
  )
}
