import React from "react";
import axios from "axios";
import { URL_HOME } from "../utils/path";
import Slider from "../utils/Slider";
import Subscription from "../utils/Subscriptions";
import Blocks from "./Blocks";
import Poll from "./Poll";

class Home extends React.Component {
  state = {
    home: ""
  };

  componentDidMount() {
    axios.get(URL_HOME).then(res => this.setState({ home: res.data }));
  }

  render() {
    return (
      <>
        <Slider s={this.state.home.slider} />
        <Blocks b={this.state.home.blocks} />
        <Poll />
        <Subscription />
      </>
    );
  }
}

export default Home;
