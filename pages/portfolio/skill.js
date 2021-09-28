import Layout2 from '@/components/fullscreen/layout2'

export default function Skill() {
  return (
    <Layout2>
        <div className="p-5 mb-4 rounded-3 row">
          <div className="col-md-4">
            <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>Frontend</i></b></li>
                  <li>jQuery,DataTables 등 라이브러리 활용</li>
                  <li>javascript에 대한 이해</li>
                  <li>HTML, CSS 등 W3C웹 표준 규격에 대한 이해</li>
                  <li>크로스브라우징, 웹 표준, 웹 접근성에 대한 이해와 경험</li>
                  <li>Angular, React 활용 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>Backend</i></b></li>
                  <li>Spring을 이용한 개발</li>
                  <li>Django를 통한 API 개발 학습</li>
                  <li>API 설계 및 서버 구축</li>
                  <li>테스트, 배포 자동화</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <ul className="list-unstyled text-small">
                  <li><b><i>기타</i></b></li>
                  <li>Linux, Windows 서버 환경 개발 및 배포</li>
                  <li>Go, C/C++, .NET을 활용 학습</li>
                  <li>Docker, Kubernetes 활용 학습</li>
                  <li>Mysql, Mssql, Oracle 등 RDBMS 활용</li>
                  <li>CI/CD 파이프라인 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Layout2>
  )
}
