import Layout from '@/components/fullscreen/layout'
import React, {Component} from 'react';
import Link from "next/link";

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
        <Layout>
        <div className="row align-items-center">
            <div className="col-sm-6">
            <h1 className="text-primary fw-bold display-3">Hi, I&apos;m Sujung</h1>
            <p className="text-start p-2">&nbsp;열정으로 미래를 여는 개발자 김수정 입니다. 🚀 
            다양한 프로그래밍 언어(javascript, java, C, C++, C#, go, rust 등)과 프레임워크, 라이브러리 오픈소스 등에 관심이 있습니다.📚 항상 역량을 향상시키고 아는 것을 정리 할 수 있는 학습법에 대해 고민하고 있습니다. 개발에 대한 스터디, 컨퍼런스 등 다양한 기회를 나누고 싶습니다.🙆‍♀️</p>
            <p className="text-start p-2">&nbsp; A passionate Software Developer having an experience of building Web/App application.🚀 I&apos;m intereted in studying Prgramming language(Javascript, Java, C, C++, Go,...) and some other cool libraries and framework.📚 Study with me. 🙆‍♀️</p>
            
            <div className="text-center">
              <Link href="/portfolio/contact">
              <a className="btn btn-primary my-1 mx-3" href="#">Contact Me</a>
              </Link>
              <a className="btn btn-outline-primary my-1 mx-3" href="/cv_crikim.pdf" download>Resume</a>
             
              </div>
              </div>
              <div className="col-sm-6 text-center">
                <svg style={{width:"80%"}} id="Capa_1" enableBackground="new 0 0 497 497" 
                height="512" viewBox="0 0 497 497" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m275.57 401-84.14 30-3.19 11.15c-4.53 15.87-21.74 28.85-38.24 28.85v7.5h174.5z" fill="#adaca7"/><path d="m308.76 442.15-11.76-41.15-48.5-30-48.5 30-8.57 30h84.14l3.19 11.15c4.53 15.87 21.74 28.85 38.24 28.85l15 7.5 15-7.5c-16.5 0-33.71-12.98-38.24-28.85z" fill="#8f8f8b"/><path d="m437 401h30c16.5 0 30-13.5 30-30v-60l-60-60z" fill="#adaca7"/><path d="m0 371c0 16.5 13.5 30 30 30h407c16.5 0 30-13.5 30-30v-180l-467 120z" fill="#cbc9c2"/><path d="m467 11h-30l30 300h30v-270c0-16.5-13.5-30-30-30z" fill="#404242"/><path d="m467 41c0-16.5-13.5-30-30-30h-407c-16.5 0-30 13.5-30 30v270h467v-30l-218.5-120.013z" fill="#565959"/><path d="m467 40.995-29.994-.021c0 .005-188.506 120.013-188.506 120.013s188.502 120.011 188.5 120.013c0 0 29.999-.02 29.999-.02.001 0-.002-239.981.001-239.985z" fill="#4b88d5"/><path d="m437 40.995-406.912-.022c-.025.012-.046 240.022-.088 240.027 0 0 406.98-.02 406.99-.02.005 0-.032-239.981.01-239.985z" fill="#69a7ff"/><circle cx="248.5" cy="356" fill="#fff" r="15"/><path d="m403.5 486h-310c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h310c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#8f8f8b"/></g></svg>
              </div>
            </div>
          </Layout>
      </div>
    );
  }
}

export default Home;