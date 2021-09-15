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
          <div className="p-5 mb-4 rounded-3">
            <Cloud/>
            <div className="col-md-8 p-lg-8 mx-auto my-5">
              <h1 className="display-4 fw-normal">Welcome.(❁´◡`❁)</h1>
            </div>
          </div>
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
            
            </div>
            <div className="col-md-6">
              <Cat onCreate={this.handleCreate}></Cat>
            </div>
          </div>
      </Layout>
    );
  }
}

export default Home;