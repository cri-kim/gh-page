import Layout from '@/components/portfolio/layout'
import Temp1 from '@/components/portfolio/temp1'

export default function Home() {
  return (
    <Layout>
        <div className="p-5 mb-4 rounded-3">
          <Temp1/>
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal"><i>김수정</i> 입니다.</h1>
            <p className="lead fw-normal">원활한 의사소통, 발전을 위한 학습, 그리고 끈기를 갖고 오늘도 모니터와 함께있습니다.</p>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
    </Layout>
  )
}
