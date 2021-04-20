import React, { Component, Fragment } from "react";

import "./styles/BadgeNew.css";

import header from "../images/badge-header.svg";
import fotoJuan from "../images/logo_cara_sin_nombre_blanco.png";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      user: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { firstName, lastName, email, jobTitle, user } = this.state.form;
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={firstName}
                lastName={lastName}
                jobTitle={jobTitle}
                user={user}
                email={email}
                avatar={fotoJuan}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
