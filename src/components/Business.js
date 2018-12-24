import React,{Component} from 'react'
import { Container, Row, Col } from "reactstrap";
import "../css/blog-css.css";

class Business extends Component {
    render() {
        return(
            <div>
        <div className="b-top">
          <h1 className="b-font-title">
            ร่วมงานกับเรา
          </h1>
        </div>
        <div class="about-content2">
        <Container>
        <Row>
            <Col><p className="text-center">ธุรกิจสามารถติดต่อเพื่อร่วมงานกับเราได้ทางนี้</p></Col>
        </Row>
        <Row>
            <Col>
            <img src="https://i.imgur.com/76Awx2T.png" width="100%" />
            <h2 className="font-h1">อาหาร</h2>
            <p>เจ้าของผลิตภัณฑ์อาหารสัตว์เลี้ยง สามารถเข้ามาร่วมธุรกิจกับเราได้</p>
            </Col>
            <Col>
            <img src="https://i.imgur.com/9FMqkzr.jpg" width="100%" />
            <h2 className="font-h1">สุขภาพ</h2>
            <p>คลินิก สัตว์แพทย์ เรากำลังหาทางร่วมงานกับคุณ</p>
            </Col>
            <Col>
            <img src="https://i.imgur.com/fsY0WyL.jpg" width="100%" />
            <h2 className="font-h1">เสริมความงาม</h2>
            <p>ร่วมงานกับเราเพื่อพัฒนาธุรกิจหรือบริการเสริมความงามสุนัข</p>
            </Col>
            <Col>
            <img src="https://i.imgur.com/Nl9JZQc.jpg" width="100%" />
            <h2 className="font-h1">อุปกรณ์</h2>
            <p>โปรโมทสินค้าของคุณให้ตรงกลุ่มเป้าหมายกับเรา</p>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
        )
    }
}

export default Business