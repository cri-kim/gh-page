import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <header className="mb-auto">
      <div>
      <h3 className="float-md-start mb-0"><i><Link href="/portfolio"><a>sj.Kim</a></Link></i></h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link href="/portfolio/about"><a className="nav-link" aria-current="page" href="#">About</a></Link>
          <Link href="/portfolio/exp"><a className="nav-link" aria-current="page" href="#">Experience</a></Link>
          <Link href="/portfolio/skill"><a className="nav-link" aria-current="page" href="#">Skill</a></Link>
          <Link href="/portfolio/contact"><a className="nav-link" aria-current="page" href="#">Contact</a></Link>
        </nav>
      </div>
  </header>
  )
}