import Layout from '@/components/portfolio/layout'
import Cloud from '@/components/avatars/cloud'
import Cat from '@/components/avatars/cat'
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
      <Layout>
          <Cloud/>
          <Cat onCreate={this.handleCreate}></Cat>
      </Layout>
    );
  }
}

export default Home;