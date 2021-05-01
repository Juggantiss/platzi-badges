import React, { Component, Fragment } from "react";

import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
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

  handleClick = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const { firstName, lastName, email, jobTitle, twitter } = this.state.form;
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={firstName || "First Name"}
                lastName={lastName || "Last Name"}
                jobTitle={jobTitle || "JOB_TITLE"}
                twitter={twitter || "Twitter"}
                email={email || "Email"}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleClick}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
