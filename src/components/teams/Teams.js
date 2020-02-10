import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL_TEAMS } from "../utils/path";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Teams extends React.Component {
  state = {
    teams: [],
    filtered: [],
    keyword: ""
  };

  componentDidMount() {
    axios.get(URL_TEAMS).then(res => {
      this.setState({
        teams: res.data,
        filtered: res.data
      });
    });
  }

  renderList = filtered =>
    filtered.map((item, index) => (
      <CSSTransition key={index} timeout={500} classNames="fade">
        <Link to={`/teams/${item.name}`} className="team_item">
          <img alt={item.name} src={`/images/teams/${item.logo}`} />
        </Link>
      </CSSTransition>
    ));

  searchTeams = e => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const list = this.state.teams.filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });
      this.setState({ filtered: list, keyword });
    } else {
      this.setState({
        filtered: this.state.teams,
        keyword
      });
    }
  };
  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            value={this.state.keyword}
            placeholder="search for a team"
            onChange={e => this.searchTeams(e)}
          />
        </div>
        <div className="teams_container">
          <TransitionGroup component="span">
            {this.renderList(this.state.filtered)}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default Teams;
