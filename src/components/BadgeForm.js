import React, { Component } from "react";

class BadgeForm extends Component {
  state = {
    jobTitle: "React Dev",
  };

  // handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("Boton presionado");
  //   console.log(this.state);
  // };

  render() {
    const { onChange, formValues, onSubmit, error } = this.props;
    const { firstName, lastName, email, jobTitle, twitter } = formValues;

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
            <label htmlFor="twitter">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={onChange}
              value={twitter}
            />
          </div>

          <button onClick={onSubmit} className="btn btn-primary">
            Save
          </button>

          {error && <p className="text-danger">{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
