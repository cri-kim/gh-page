import styles from '@/components/fullscreen/fullscreen.module.css'
import Navbar from '@/components/fullscreen/navbar';
import RightSideBar from '@/components/fullscreen/rightSideBar';


const Layout2 = ({children}) =>{
    return (
    <div className={styles.container}>
        <RightSideBar/>
        <Navbar/>
        <main className={styles.main} > {children}</main>
    </div>
    )
};

export default Layout2;