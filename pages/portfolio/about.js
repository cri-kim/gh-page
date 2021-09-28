import Layout2 from '@/components/fullscreen/layout2'
export default function About() {
  return (
    <Layout2>
      <div className="p-5 mb-4 rounded-3">
        <p>
          저는 Java N Spring Framework 기반의 웹 서비스를 개발 및 운영하였으며,
          서비스간 연동 업무, 백오피스 개발, UI/UX를 고려한 화면 개발을 진행하였습니다.
          그밖에 시스템 배포 자동화 및 유기적인 프로젝트의 관리를 위해 CI/CD 구축을 진행하였습니다.
                
        </p>
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
        &quot;누구나 숨 쉬듯 사용할 수 있는 서비스를 만들자!&quot;
        누구나 쉽게, 안심하고 사용할 수 있는 서비스를 만드는 것이 저의 목표입니다.
        </div>
        <div className="col-md-6">
          &quot;지구상의 모든 것은 서비스화 할 수 있다.&quot;
          중고거래, 리싸이클링, 심부름, 지나가는 개미를 세는것 까지도 모두 가치가 있는 정보라고 생각합니다.
          정보의 가치를 만들어나가는 개발자가 되고싶습니다.
        </div>
      </div>
    </Layout2>
  )
}
