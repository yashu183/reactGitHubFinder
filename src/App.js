import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./About";
import UserDetails from "./components/UserDetails";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    isSearchedResults: false,
    alert: null,
    userDetails: {},
    repos: [],
  };

  // clientId = process.env.REACT_GITHUB_CLIENT_ID;
  clientSecret = "e3856ea4f79cbbf09008f3692a06457ab94e653a";

  // clientSecret = process.env.REACT_GITHUB_CLIENT_SECRET;
  clientId = "46b60176b54753d8e301";

  // loading default users on first load
  async componentDidMount() {
    this.setState({ isSearchedResults: false });
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    this.setState({ users: response.data, loading: false });
  }

  // searching the users
  searchUser = async (userName) => {
    this.setState({ loading: true, isSearchedResults: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${userName}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );

    this.setState({ users: response.data.items, loading: false });
  };

  // getting details of a particular user
  getUserDetails = async (userName) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    this.setState({ loading: false, userDetails: response.data });
  };

  // get repo details of a particular user
  getUserRepos = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=10&sort=created:desc&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    this.setState({ loading: false, repos: res.data });
  };

  clearSearchResults = (e) => {
    this.componentDidMount();
    this.setState({ isSearchedResults: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setInterval(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar title="Github Finder" />
          <Alert alert={this.state.alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearSearchResults={this.clearSearchResults}
                    searchedResults={this.state.isSearchedResults}
                    setAlert={this.setAlert}
                  />
                  <div className="container">
                    <UserList
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </div>
                </Fragment>
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/user-details/:userName"
              element={
                <UserDetails
                  getUserDetails={this.getUserDetails}
                  userDetails={this.state.userDetails}
                  getUserRepos={this.getUserRepos}
                  loading={this.state.loading}
                  repos={this.state.repos}
                />
              }
            />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default App;
// https://store.mi.com/in/item/3200200005
// https://store.mi.com/in/item/3193500004
