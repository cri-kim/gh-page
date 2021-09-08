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
        <div className="p-5 mb-4 rounded-3">
          <div className={styles.ball}></div>
          <div className={styles.goal}></div>
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal"><i>김수정</i> 입니다.</h1>
            <p className="lead fw-normal">원활한 의사소통, 발전을 위한 학습, 그리고 끈기를 갖고 오늘도 모니터와 함께있습니다.</p>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6">
            
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
