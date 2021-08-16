function Portfolio() {
  return (
    <main>
      <div className="h-100 text-center text-white bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  SKILL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="col-md-5 mx-auto my-5">
            <div className="display-4 fw-normal">
              <h1>안녕하세요.<br/> 개발자 김수정입니다.</h1>
            </div>
            <p className="lead fw-normal">
              유연하고 안정성 있는 서비스를 위해 <br/>
              어제보다 편리한 서비스를 만들기 위해<br/>
              오늘도 화면 앞에 있습니다.<br/>
            </p>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="title" id="about">
            ABOUT
          </div>
          <div>
            저는 Java & Spring Framework 기반의 웹 서비스를 개발 및
            운영하였으며,
            <br />
            WebSocket, RESTAPI 등 활용하여 서비스간 연동 업무를 진행하였습니다.
            <br />
            또한, 시스템 배포 자동화 및 유기적인 프로젝트의 관리를 위해 CI/CD
            구축을 진행하였습니다.
            <br />
            그 밖에 사용자들을 편리하게 하는 다양한 백오피스를 개발하고있습니다.
            <br />
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="title" id="experience">
            EXPERIENCE
          </div>
          <div>
            <ul>
              <li>한국문화진흥 (2020.12 ~ 재직중)</li>
              <li>핀판매 실시간 연동 API</li>
              <li>CI/CD 구축</li>
              <li>백오피스</li>
            </ul>
            <ul>
              <li>파인디지털 (2018.06 ~ 2020.07)</li>
              <li>5G 중계기 관리 시스템</li>
              <li>기타 중계기, 통신장비 관리 시스템</li>
              <li>백오피스 시스템</li>
            </ul>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="title" id="skill">
            SKILL
          </div>
          <div>
            <ul>
              <li>
                <div>Java</div>
                <div>
                  Deep하게 빠져보기 위한 정리
                  <br />
                  spring을 이용한 나홀로 토이프로젝트
                  <br />
                  spring 팀프로젝트
                  <br />
                </div>
              </li>
              <li>
                <div>HTML, Javascript, Typescript, CSS</div>
                <div>Readme를 꾸미기 위한 React</div>
              </li>
              <li>
                <div>Go</div>
                <div>매력에 빠져보기 위한 정리</div>
              </li>
              <li>
                <div>Python</div>
                <div>간단한 웹크롤링 연습</div>
              </li>
              <li>
                <div>C++,C#, VB6, ASP.NET 등</div>
                <div>
                  오목게임
                  <br />
                  프로젝트를 진행하며 경험
                </div>
              </li>
            </ul>
            <ul>
              <li>Spring framework</li>
              <li>RDBMS(Oracle, MSSQL, MySQL, MariaDB 등)</li>
              <li>NoSQL</li>
              <li>Django</li>
            </ul>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="title" id="contact">
            CONTACT
          </div>
          <div>
            <ul>
              <li>
                <a href="https://67crystalk.tistory.com">
                  https://67crystalk.tistory.com
                </a>
              </li>
              <li>67crystalk@gmail.com</li>
              <li>
                <a href="https://github.com/cri-kim">
                  https://github.com/cri-kim
                </a>
              </li>
            </ul>
          </div>
        </div>     
        <div className="spinner-grow text-dark" role="status">
            <a className="content_top" href="#top">
              <span>TOP</span>
            </a>
        </div>
      </div> 
    </main>
  );
}
export default Portfolio;
