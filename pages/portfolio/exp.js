import Layout2 from '@/components/fullscreen/layout2'

export default function Exp() {
  return (
    <Layout2>
        <div className="p-5 mb-4 rounded-3 row">
          <div className="col-md-4">
            <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b>한국문화진흥</b></li>
                  <li>(2020.12 ~ 재직중) </li>
                  <li className="text-start">CI/CD 구축
                    <ul>
                      <li>Jenkins, Gitlab 등 구축</li>
                      <li>배포 파이프라인 작성</li>
                    </ul>
                  </li>
                  <li></li>
                  <li className="text-start">백오피스 개발</li>
                  <li className="text-start">실시간 핀판매 연동 개발 및 운영</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b>파인디지털</b></li>
                  <li>2018.05 ~ 2020.05</li>
                  <li className="text-start">NMS 개발 및 운영
                    <ul>
                      <li>HTTP API 개발</li>
                      <li>Java, Spring framework 등 활용</li>
                      <li>DB 쿼리 작성 및 튜닝</li>
                      <li>Oracle, MariaDB 등 RDBMS 사용</li>
                      <li>Web front End 개발</li>
                      <li>HTML, CSS, Javascript, JQuery, Angular 등 활용</li>
                      <li></li>
                    </ul>
                  </li>
                  <li className="text-start">
                    물류 관리 시스템 운영
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Layout2>
  )
}
