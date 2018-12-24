import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
            <ylw>แต่เงินบริจาคของท่านจะช่วยเพิ่มโอกาสให้สุนัข</ylw>
            ได้กลับมาพบเจ้าของอีกครั้ง"
          </p>
          <hr />

          <div className="grid">
            <div className="row">
              <div className="col">
              การบริจาคของท่านเป็นแรงผลักดันสำคัญที่ทำให้ <ylw>Delsaver</ylw> สามารถดำเนินงานในฐานะเป็นผู้ให้บริการศูนย์กลาง ข้อมูลระหว่างเจ้าของสัตว์เลี้ยงที่หายและจิตอาสาที่พบเจอสุนัขต้องสงสัยต่อไปได้
              </div>
              <div className="col">
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Donation;
