// we will have initial state and actions like n/w calls and updating the state by triggering reducer from here

import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import {
    GET_USER_DETAILS,
    GET_USER_REPOS,
    SEARCH_USERS,
    SET_ALERT,
    SET_IS_SEARCH_RESULTS,
    SET_LOADING,
    DEFAULT_USERS,
    SET_USER_NAME
} from '../types';
import GithubReducer from './githubReducer';

const GithubState = (props) => {
    const clientSecret = 'e3856ea4f79cbbf09008f3692a06457ab94e653a';
    const clientId = '46b60176b54753d8e301';

    const initialState = {
        users: [],
        loading: false,
        isSearchedResults: false,
        alert: null,
        userDetails: [],
        repos: [],
        userName: ''
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // // actions go here...

    // getting default users
    const getDefaultUsers = async () => {
        setLoading();
        const response = await axios.get(
            `https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`
        );

        dispatch({
            type: DEFAULT_USERS,
            payload: response.data
        });
    };

    // searching the users
    const searchUser = async (userName) => {
        setIsSearchedResults();
        setLoading();
        const response = await axios.get(
            `https://api.github.com/search/users?q=${userName}&client_id=${clientId}&client_secret=${clientSecret}`
        );

        // set users - dispatch the search results
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        });
    };

    // get user details
    const getUserDetails = async (userName) => {
        setLoading();
        const response = await axios.get(
            `https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`
        );
        // set user details
        dispatch({
            type: GET_USER_DETAILS,
            payload: response.data
        });
    };

    // get user repos
    const getUserRepos = async (userName) => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${userName}/repos?per_page=10&sort=created:desc&client_id=${clientId}&client_secret=${clientSecret}`
        );
        dispatch({
            type: GET_USER_REPOS,
            payload: res.data
        });
    };

    // set alert
    const setAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } });

        setInterval(() => {
            dispatch({ type: SET_ALERT, payload: null });
        }, 3000);
    };

    // set username
    const setUserName = (userName) => {
        dispatch({
            type: SET_USER_NAME,
            payload: userName
        });
    };

    // set loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING });
        // can use it bcz of useReducer hook and it takes an obj with type and payload(if any) fields
    };

    // set isSearchedResults
    const setIsSearchedResults = () => {
        dispatch({ type: SET_IS_SEARCH_RESULTS });
    };

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                isSearchedResults: state.isSearchedResults,
                alert: state.alert,
                searchUser,
                getUserDetails,
                getUserRepos,
                userDetails: state.userDetails,
                repos: state.repos,
                setAlert,
                getDefaultUsers,
                setUserName,
                userName: state.userName
            }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
