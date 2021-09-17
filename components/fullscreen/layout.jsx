import styles from '@/components/fullscreen/fullscreen.module.css'

const Layout = () =>{
    return (
    <div className={styles.contents}>
        <div className={styles.about}>
        <br/><br/><br/><br/><br/>
          김수정의 포트폴리오입니다. 디자인 작업중입니다.<br/>
          사실 저는 디자인을 정말 못합니다.
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