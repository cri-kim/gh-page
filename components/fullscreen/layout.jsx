import styles from '@/components/fullscreen/fullscreen.module.css'
import Navbar from '@/components/fullscreen/navbar';
import RightSideBar from '@/components/fullscreen/rightSideBar';


const Layout = ({children}) =>{
    return (
    <div className={styles.contents}>
        <RightSideBar/>
        <Navbar/>
        <div className={styles.about}>
          <div className={styles.innerLayer}>
                <main className={styles.main} > {children}</main>
            </div>
        </div>
    </div>
    )
};

export default Layout;