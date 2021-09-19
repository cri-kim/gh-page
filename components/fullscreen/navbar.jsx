import Link from "next/link";
import styles from "@/components/fullscreen/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';

class Navbar extends Component {

render(){
    return (
      <div className={styles.aside}>
        <div className={styles.asideOpen}>
          <button type="button" className={styles.asideBtn}>
            <Link href="/portfolio/about">
              <a className="nav-link" aria-current="page" href="#">
                About
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
        
        <div className={styles.dropdown}>
          <button type="button" 
          className={styles.menu}>
            menu
          </button>
          <div className={styles.dropdownContent}>
            <button type="button" className={styles.asideBtn}>
              <Link href="/portfolio/about">
                <a className="nav-link" aria-current="page" href="#">
                  About
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
      </div>
    );
  }
}
export default Navbar;