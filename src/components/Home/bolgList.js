import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import "../../css/home.css";
import { Link } from 'react-router-dom'
class Blog extends Component {
  constructor() {
    super();
    this.state = { toggle: false };
  }
  render() {
    return (
      <div className="grid">
      <Card className="mr2 mb2">
        {" "}
        <Link to="/blog1">
        <CardImg
          className="pointer"
          src="https://i.imgur.com/DPALClE.jpg"
          alt="Lost dog image"
        />
        </Link>
        <CardBody>
          <CardTitle>ระวัง! 6 สาเหตุที่ทำให้สุนัขของเราหายไป พร้อมวิธีการป้องกัน 
</CardTitle>
          <CardText>
          หลังจากทำงานมาเหน็ดเหนื่อย ตอนนี้ก็ใกล้ช่วงสิ้นปีที่ทุกคนจะต้องรีบจัดการงานทุกอย่าง เพื่อหยุดพักผ่อนกันอย่างสบายใจ ….
          </CardText>
        </CardBody>
      </Card>
      
        <Card className="mr2 mb2">
          <Link to="/blog2">
            <CardImg
              className="pointer"
              src="https://i.imgur.com/S3GGfwN.png"
              alt="Lost dog image"
            />
        </Link>
          <CardBody>
            <CardTitle>บทสัมภาษณ์ : เจอน้องเพราะลองของใหม่</CardTitle>
            <CardText>
            หลังจากสุนัขหายไปเพราะงานเทศกาล Delsaver บริการค้นหาสัตว์เลี้ยงแบบใหม่ก็ช่วยให้เล็กเจอน้องมะขามอีกครั้ง …
            
            </CardText>
          </CardBody>
        </Card>
      <Card className="mr2 mb2">
        {" "}
        <CardImg
          className="pointer"
          src="https://i.imgur.com/ByBk3aq.jpg"
          alt="Lost dog image"
        />
        <CardBody>
          <CardTitle>ปลอกคออัจฉริยะ ติดตามพฤติกรรมน้องสุนัข</CardTitle>
          <CardText>
          เทคโนโลยีการเชื่อมต่ออินเทอร์เน็ตในปัจจุบัน มีรวดเร็วเป็นอย่างมากประกอบกับการมีราคาที่ถูก ทำให้เราได้เห็นผลิตภัณฑ์ …
          
          </CardText>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Blog;
