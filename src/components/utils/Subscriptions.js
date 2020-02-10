import React, { Component } from "react";
import { URL_EMAIL } from "../utils/path";
import axios from "axios";

class Subscription extends Component {
  state = {
    email: "",
    error: false,
    success: false,
    alreadyIN: false
  };

  clearMessages = () => {
    setTimeout(() => {
      this.setState({
        error: false,
        success: false,
        alreadyIn: false
      });
    }, 3000);
  };

  saveSubscription = email => {
    axios.get(`${URL_EMAIL}?email=${email}`).then(res => {
      if (!res.data.length) {
        axios(URL_EMAIL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          data: JSON.stringify({ email: email })
        }).then(() => {
          this.setState({
            email: "",
            success: true
          });
          this.clearMessages();
        });
      } else {
        this.setState({
          email: "",
          alreadyIN: true
        });
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let email = this.state.email;
    let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(email)) {
      this.saveSubscription(email);
    } else {
      this.setState({ error: true });
    }
    console.log(email);
    this.clearMessages();
  };

  handleChangeInput = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    const state = this.state;
    return (
      <div className="subcribe_panel">
        <h3>Subscribe to us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={state.email}
              placeholder="youremail@example.com"
              onChange={this.handleChangeInput}
            />
            <div className={state.error ? "error show" : "error"}>
              Check your email
            </div>
            <div className={state.success ? "success show" : "success"}>
              Thank you for subscription!
            </div>
            <div className={state.alreadyIN ? "success show" : "success"}>
              your emails are already in server
            </div>
          </form>
        </div>
        <small>
          Basketball players express themselves with their clothes, words, and
          even the stuff they do away from the hardwood. In the modern NBA, most
          fans identify the league's biggest stars as much by their on-court
          prowess as their demeanor off it.
        </small>
      </div>
    );
  }
}
export default Subscription;
