import React, { Component } from "react";
import { Link } from "react-router-dom";
import Gravatar from "../components/Gravatar";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    const { badges } = this.props;
    badges.reverse();
    if (badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badges.map((badge) => {
            return (
              <div key={badge.id} className="BadgesListItem">
                <Gravatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                />
                <li>
                  <p className="BadgesListItem__name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <div className="BadgesListItem__email">
                    <p>{badge.email}</p>
                    <span>@{badge.twitter}</span>
                  </div>
                  <p className="BadgesListItem__job">{badge.jobTitle}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
