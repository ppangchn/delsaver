import React, { Component } from "react";
import LostDogCard from "./FoundDogCard";
import "../../css/Layout.css";
class FoundDogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [
        {
            pic: "https://imgur.com/CqsiQQc.jpg",date:'28 DEC 2018'
        },
        {
            pic: "https://imgur.com/fgPxl0q.jpg",date:'25 NOV 2018'
        },
        {
            pic: "https://imgur.com/x3M1SSR.jpg",date:'16 MAY 2018'
        },
        {
            pic: "https://imgur.com/XDT090y.jpg",date:'14 MAR 2018'
        },
        {
            pic: "https://imgur.com/q9ErJqs.jpg",date:'10 JAN 2018'
        },
        {
            pic: "https://imgur.com/USpAJT8.jpg",date:'4 JAN 2018'
        }

      ]
    };
  }
  render() {
    const { listOfLostDog } = this.state;
    return (
      <div className="grid mt2">
        {listOfLostDog.map(data => {
          return <LostDogCard data={data} />;
        })}
      </div>
    );
  }
}

export default FoundDogList;
