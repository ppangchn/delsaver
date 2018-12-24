import React, { Component } from "react";
import Blog from "./blog";
import '../../css/home.css'

class BlogList extends Component {
  constructor() {
    super();
    this.state = {
      listOfLostDog: [1, 2, 3]
    };
  }
  render() {
    const { listOfLostDog } = this.state;
    return (
      <div className="grid mt2">
            {listOfLostDog.map(dog => {
              return <Blog data={dog} />;
            })}
      </div>
    );
  }
}

export default BlogList;
