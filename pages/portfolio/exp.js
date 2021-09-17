import Layout from '@/components/portfolio/layout'

export default function Exp() {
  return (
    <Layout>
        <div className="p-5 mb-4 rounded-3 row">
          <div className="col-md-4">
            <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>한국문화진흥</i></b></li>
                  <li>(2020.12 ~ ) </li>
                  <li>CI/CD 구축
                    <ul>
                      <li>Jenkins, Gitlab 등 구축</li>
                      <li>배포 파이프라인 작성</li>
                    </ul>
                  </li>
                  <li></li>
                  <li>백오피스 개발</li>
                  <li>실시간 핀판매 연동 개발 및 운영</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>아성 HMP</i></b></li>
                  <li>2020.07 ~ 2020.09</li>
                  <li>디자인 자산 관리 시스템 개발</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>파인디지털</i></b></li>
                  <li>2018.05 ~ 2020.05</li>
                  <li>중계기 통합 관리 시스템 개발
                    <ul>
                      <li>서비스 운영</li>
                      <li>차세대 시스템 개발</li>
                    </ul>
                  </li>
                  <li>중계기 감시 시스템 개발
                    <ul>
                      <li>서비스 운영</li>
                      <li>차세대 시스템 개발</li>
                    </ul>
                  </li>
                  <li>
                    물류 관리 시스템 운영
                  </li>
                  <li>NMS 개발(DAS 관리)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
