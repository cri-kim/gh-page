import styles from '@/components/fullscreen/fullscreen.module.css'
import Link from "next/link";

const Layout = () =>{
    return (
    <div className={styles.contents}>
        <div className={styles.about}>
          <Link href="/portfolio/about">
          <a className="nav-link" aria-current="page" href="#">
          <p className={styles.center}>
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
          □■■■■■■□□■□□□□□□□□■□□□□□□■■■■■■□□■□□
          □□□□□□■□□■□□□□□□□□■□□□□□□□□■□□□□□■□□
          □□□□□□■□□■□□□□□□□■□■□□□□□□□■□□■■■■□□
          □□□□□■□□□■□□□□□□■□□□■□□□□□□■■□□□□■□□
          □□□□■□□□□■□□□□■■□□□□□■■□□□■□□■□□□■□□
          □■■■□□□□□■□□□□□□□□□□□□□□□■□□□□■□□■□□
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
          □□■■■■■■■■□□□■■■■■■■■■■□□□□■■■■■■□□□
          □□■□□□□□□■□□□□□□□□■□□□□□□□■□□□□□□■□□
          □□■□□□□□□■□□□□□□□□■□□□□□□□■□□□□□□■□□
          □□■■■■■■■■□□□□□□□□■□□□□□□□□■■■■■■□□□
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
          </p>
        <p>
          Cri-Kim OS 1.0.0
        </p>
        <p className={styles.select1}>
          Install Cri-Kim OS 1.0.0
        </p>
        <p className={styles.select2}>
          Trust this media & install Cri-Kim 1.0.0
        </p>

        <p className={styles.select3}>
          Troubleshooting
        </p>

        <p className={styles.select4}>
          Press Tap for full configuration options on menu items.
        </p>
          <span className={styles.text}>
            # Hi, There.
          </span>
          <span className={styles.text}>
            # Log all kernal messages to the console.
          </span>
          <span className={styles.text}>
            # logging mush else clutters up the screen;
          </span>
          <span className={styles.text}>
            #Log anything (except main) of level into or higher.
          </span>
          <span className={styles.text}>
            #Don`t log private authentication message.
          </span>
          <span className={styles.text}>
            *.info;mail.none;authpriv.none;cron.none
          </span>
          <span className={styles.text}>

            #Log cron stuff
          </span>
          <span className={styles.text}>
            cron.*
          </span>
          <span className={styles.text}>

            #Everybody gets emergency messages
          </span>
          <span className={styles.text}>

            #Save boot messages also to boot.log
          </span>
          </a>
        </Link>
        </div>
        <div className={styles.exp}>
        <br/><br/><br/><br/><br/>
          디자이너와 프로젝트를 해보았는데 정말 못합니다. <br/>
          디자이너가 만들어오면 정말 다 예쁘다 멋지다 당신은 천재다! 라는 말밖에 못합니다.
        </div>
        <div className={styles.contact}>
        <br/><br/><br/><br/><br/>
          진심입니다.<br/>
          포트폴리오 어떻게 꾸며야 이쁠까요?<br/>
          디자인만 주면 다 만들 수 있는데...
        </div>
    </div>
    )
};

export default Layout;