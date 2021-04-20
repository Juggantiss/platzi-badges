import React, { Component } from "react";

class BadgeForm extends Component {
  state = {
    jobTitle: "React Dev",
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("Boton presionado");
    console.log(this.state);
  };

  handleSubmit = (e) => {
    console.log("Form was submitted");
  };

  render() {
    const { onChange, formValues } = this.props;
    const { firstName, lastName, email, jobTitle, user } = formValues;

    return (
      <div>
        <h1>New Attendant</h1>

        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={onChange}
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={onChange}
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={onChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={onChange}
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="user">User</label>
            <input
              className="form-control"
              type="text"
              name="user"
              onChange={onChange}
              value={user}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
