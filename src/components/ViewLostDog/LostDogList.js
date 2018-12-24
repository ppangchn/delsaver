import React, { Component } from "react";
import LostDogCard from "./LostDogCard";
import "../../css/Layout.css";
class LostDogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [
        {
            pic: "https://imgur.com/ALz8HpE.jpg",
            date:'30 NOV 2018',reward:'1000 Baht'
        },
        {
            pic: "https://imgur.com/JLeB5V2.jpg", date:'27 JUN 2018',reward:'2000 Baht'
        },
        {
            pic: "https://imgur.com/lgN03i5.jpg", date:'26 JAN 2018',reward:'5000 Baht'
        },
        {
            pic: "https://imgur.com/C2qEtXM.jpg", date:'23 AUG 2018',reward:'1200 Baht'
        },
        {
            pic: "https://imgur.com/kDeGJca.jpg", date:'15 DEC 2018',reward:'1123 Baht'
        },
        {
            pic: "https://imgur.com/LEuNIvn.jpg", date:'10 JUN 2018',reward:'5123 Baht'
        },
        {
            pic: "https://imgur.com/NS1ceK7.jpg", date:'11 JUN 2018',reward:'1562 Baht'
        },
        {
            pic: "https://imgur.com/HhP1wZM.jpg", date:'5 MAY 2018',reward:'1000 Baht'
        },
        {
            pic: "https://imgur.com/a4hVXo4.jpg", date:'1 DEC 2018',reward:'1000 Baht'
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
