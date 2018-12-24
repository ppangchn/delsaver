import React, { Component } from "react";
import { Container, Row, Col, ButtonGroup, Button, Input } from "reactstrap";
import "../../css/donate.css";

class Donation extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <h1 className="font-title">
            ร่วมเป็นส่วนหนึ่งในการส่งน้องหมากลับบ้าน
          </h1>
        </div>
        <Container>
          <hr />
          <p className="font-title text-center">
            "สุนัขพลัดหลงจากเจ้าของ ก็เหมือนกับเด็กที่ขาดผู้ปกครองคอยดูแล
            ทำให้เขาก้าวร้าว ดุร้าย
            <br /> และเป็นปัญหาสังคม
            <span className="color-h">
              แต่เงินบริจาคของท่านจะช่วยเพิ่มโอกาสให้สุนัข
            </span>
            ได้กลับมาพบเจ้าของอีกครั้ง"
          </p>
          <hr />
        </Container>

        <div className="info">
          <Row>
            <Col className="in" xs="8">
              <p className="font-detail">
                &nbsp;การบริจาคของท่านเป็นแรงผลักดันสำคัญที่ทำให้
                <span className="color-h"> Delsaver </span>
                สามารถดำเนินงานในฐานะเป็นผู้ให้บริการศูนย์กลาง
                ข้อมูลระหว่างเจ้าของสัตว์เลี้ยงที่หายและจิตอาสาที่พบเจอสุนัขต้องสงสัยต่อไปได้
              </p>
              <div className="why font-title">ทำไมต้องบริจาคให้ Delsaver</div>
              <p className="font-detail"><br/>
                เราเป็นบริการที่ไม่แสวงหาผลกำไรที่มุ่งหวังให้สัตว์เลี้ยงได้กลับสู่เจ้าของอีกครั้ง
                ในตลอด 3 เดือนที่ผ่านมา
                เราได้แสดงให้เห็นแล้วว่าการนำแนวคิดที่เรียบง่ายมาประกอบกับนวัตกรรมอินเทอร์เน็ต
                จะช่วยส่งเสริมให้เจ้าของมีโอกาสได้พบกับสัตว์เลี้ยงที่หายเพิ่มมากขึ้นถึง
                10%
              </p>
            </Col>

            <Col className="in" xs="4">
              <div className="bn font-title">- บริจาคที่นี่ -</div>
              <ButtonGroup vertical>
                <Button className="selected">300 บาท</Button>
                <Button className="other">500 บาท</Button>
                <Button className="other">1,000 บาท</Button>
              </ButtonGroup>
              <Input placeholder="กำหนดเอง" />
              <Button>ต่อไป</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Donation;
