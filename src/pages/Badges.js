import React, { Component, Fragment } from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("1. constructor()");
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Juan",
            lastName: "Martinez",
            email: "juggantiss@gmail.com",
            jobTitle: "React Developer",
            user: "juggantiss",
            avatar:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Miguel",
            lastName: "Toledo",
            email: "geaglts@hotmail.com",
            jobTitle: "Frontend Enginner",
            user: "geaglts",
            avatar:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Alexis",
            lastName: "Regalado",
            email: "odalager17@hotmail.com",
            jobTitle: "UI/UX Designer",
            user: "odalager17",
            avatar:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    console.log("6. componentWillUnmount()");
  }

  render() {
    console.log("2/4. render()");
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Logo para header"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
