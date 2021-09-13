import styles from '@/components/portfolio/porfolio.module.css'

const Temp1 = ({children}) =>{
    return (
      <>
        <div className={styles.ball} style={{display:children}}></div>
      </>
    )
};

export default Temp1;