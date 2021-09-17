import Link from "next/link";
import styles from "@/components/fullscreen/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div className={styles.aside}>
      <div className={styles.asideOpen}>
        <button type="button" className={styles.menu}>
          menu
        </button>
        <button type="button" className={styles.asideBtn}>
          <Link href="/portfolio/about">
            <a className="nav-link" aria-current="page" href="#">
              About
            </a>
          </Link>
        </button>
        <button type="button" className={styles.asideBtn}>
          <Link href="/portfolio/exp">
            <a className="nav-link" aria-current="page" href="#">
              Experience
            </a>
          </Link>
        </button>
        <button type="button" className={styles.asideBtn}>
          <Link href="/portfolio/skill">
            <a className="nav-link" aria-current="page" href="#">
              Skill
            </a>
          </Link>
        </button>
        <button type="button" className={styles.asideBtn}>
          <Link href="/portfolio/contact">
            <a className="nav-link" aria-current="page" href="#">
              Contact
            </a>
          </Link>
        </button>
      </div>
    </div>
  );
}
