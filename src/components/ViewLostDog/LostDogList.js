import React, { Component } from "react";
import LostDogCard from "./LostDogCard";
import "../../css/Layout.css";
class LostDogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [
        {
            pic: "https://imgur.com/ALz8HpE.jpg"
        },
        {
            pic: "https://imgur.com/JLeB5V2.jpg"
        },
        {
            pic: "https://imgur.com/lgN03i5.jpg"
        },
        {
            pic: "https://imgur.com/C2qEtXM.jpg"
        },
        {
            pic: "https://imgur.com/kDeGJca.jpg"
        },
        {
            pic: "https://imgur.com/LEuNIvn.jpg"
        },
        {
            pic: "https://imgur.com/NS1ceK7.jpg"
        },
        {
            pic: "https://imgur.com/HhP1wZM.jpg"
        },
        {
            pic: "https://imgur.com/a4hVXo4.jpg"
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

export default LostDogList;
