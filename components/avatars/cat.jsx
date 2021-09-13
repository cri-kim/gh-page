import styles from '@/components/avatars/cat.module.css';
import React,{Component} from 'react'

class Cat extends Component{
  state={
    text:'',
    flag:true
  }
  handleClick = (e) =>{
    this.setState({
        text: "야옹",
        flag:false
    }
    ,this.props.onCreate(this.state));
    
  }
  render(){
    return (
      <div className={styles.cat} onClick={this.handleClick}>
        <div className={styles.ears}>
          <div className={styles.ear}></div>
          <div className={styles.ear}></div>
        </div>
        <div className={styles.face}>
          <div className={styles.eye}>◎</div>
          .
          <div className={styles.eye}>◎</div>
        </div>
        <div className={styles.ballon}>{this.state.text}</div>
      </div>
    );
  }
}

export default Cat;