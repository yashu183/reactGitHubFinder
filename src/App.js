import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './About';
import UserDetails from './components/UserDetails';

import GithubState from './context/github/GithubState';
import GithubContext from './context/github/githubContext';

const App = () => {
    const githubContextObject = useContext(GithubContext);
    console.log(githubContextObject);
    // const { isSearchedResults, users } = githubContextObject;

    return (
        <GithubState>
            <Router>
                <Fragment>
                    <Navbar title="Github Finder" />
                    <Alert />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <Fragment>
                                    <Search />
                                    <div className="container">
                                        <UserList />
                                    </div>
                                </Fragment>
                            }
                        />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/user-details/:userName" element={<UserDetails />} />
                    </Routes>
                </Fragment>
            </Router>
        </GithubState>
    );
};

export default App;
// https://store.mi.com/in/item/3200200005
// https://store.mi.com/in/item/3193500004
