import styles from '@/styles/Home.module.css'
import Navbar from '@/components/portfolio/navbar'
import Footer from '@/components/portfolio/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = ({children}) =>{
    return (
    <div className={styles.container}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Navbar/>
                <main className={styles.main} > {children}</main>
            <Footer/>
        </div>
    </div>
    )
};

export default Layout;