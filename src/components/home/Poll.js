import React, { Component } from "react";
import axios from "axios";
import { URL_TEAMS } from "../utils/path";

class Poll extends Component {
  state = {
    pollTeams: []
  };

  getPoll() {
    axios.get(`${URL_TEAMS}?poll=true&&_sort=count&_order=desc`).then(res => {
      this.setState({ pollTeams: res.data });
    });
  }

  componentDidMount() {
    this.getPoll();
  }

  addCount(count, id) {
    axios(`${URL_TEAMS}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ count: count + 1 })
    }).then(() => {
      this.getPoll();
    });
  }

  renderPoll() {
    const position = ["1ST", "2ST", "3ST"];
    return this.state.pollTeams.map((item, index) => (
      <div
        key={index}
        className="poll_item"
        onClick={() => this.addCount(item.count, item.id)}
      >
        <img alt={item.team} src={`/images/teams/${item.logo}`} />
        <h4>{position[index]}</h4>
        <div>{item.count}</div>
      </div>
    ));
  }
  render() {
    //console.log(this.state.pollTeams);

    return (
      <>
        <div className="home_poll">
          <h3>The next champion</h3>
          <div className="poll_container">{this.renderPoll()}</div>
        </div>
      </>
    );
  }
}
export default Poll;
