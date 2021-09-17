import Layout from '@/components/fullscreen/layout'
import Navbar from '@/components/fullscreen/navbar';
import React, {Component} from 'react';

class Home extends Component {
  state={
    children:"block"
  }
  handleCreate = (data)=>{
    console.log(data);
    this.setState({
      children:data.flag?"block":"none"
    });
  }
  render(){
    return (
      <div>
        <Navbar/>
        <Layout/>
      </div>
    );
  }
}

export default Home;