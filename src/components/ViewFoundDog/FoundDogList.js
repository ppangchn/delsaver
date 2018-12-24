import React, { Component } from "react";
import LostDogCard from "./FoundDogCard";
import "../../css/Layout.css";
class FoundDogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [
        {
            pic: "https://imgur.com/CqsiQQc.jpg"
        },
        {
            pic: "https://imgur.com/fgPxl0q.jpg"
        },
        {
            pic: "https://imgur.com/x3M1SSR.jpg"
        },
        {
            pic: "https://imgur.com/XDT090y.jpg"
        },
        {
            pic: "https://imgur.com/q9ErJqs.jpg"
        },
        {
            pic: "https://imgur.com/USpAJT8.jpg"
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
