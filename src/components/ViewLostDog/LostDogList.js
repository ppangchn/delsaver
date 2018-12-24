import React, { Component } from "react";
import LostDogCard from "./LostDogCard";
import '../../css/Layout.css'
class LostDogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [1, 2, 3, 4, 5]
    };
  }
  render() {
    const { listOfLostDog } = this.state;
    return (
      <div className="grid mt2">
            {listOfLostDog.map(dog => {
              return <LostDogCard data={dog} />;
            })}
      </div>
    );
  }
}

export default LostDogList;
