import React, { Component } from "react";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    const { badges } = this.props;

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badges.map((badge) => {
            return (
              <div key={badge.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatar}
                  alt="Avatar"
                />
                <li>
                  <p className="BadgesListItem__name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <div className="BadgesListItem__email">
                    <p>{badge.email}</p>
                    <span>@{badge.user}</span>
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
