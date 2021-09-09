import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({children}) =>{
    return (
      <main className={styles.main}>{children}</main>
    )
};

export default Layout;