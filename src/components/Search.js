import React, { Component } from "react";

export class Search extends Component {
  state = {
    userName: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.userName === "" || !this.state.userName) {
      this.props.setAlert("Please type something", "danger");
    } else {
      this.props.searchUser(this.state.userName);
      this.setDefaultState();
    }
  };

  setDefaultState() {
    this.setState({ userName: "" });
  }

  render() {
    return (
      <div className="container">
        <form className="d-flex col-12" onSubmit={this.submitForm}>
          <input
            type="text"
            name="userName"
            style={{ width: "90%", marginRight: "1rem", borderRadius: "5px" }}
            value={this.state.userName}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="submit"
            className="btn btn-success"
            style={{ width: "10%", marginRight: "0", borderRadius: "5px" }}
          />
        </form>
        {this.props.searchedResults && (
          <button
            className="btn btn-dark btn-block"
            style={{ borderRadius: "5px" }}
            onClick={this.props.clearSearchResults}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
