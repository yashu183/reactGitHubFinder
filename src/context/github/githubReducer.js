import {
    GET_USER_DETAILS,
    SEARCH_USERS,
    GET_USER_REPOS,
    SET_IS_SEARCH_RESULTS,
    SET_LOADING,
    DEFAULT_USERS,
    SET_ALERT,
    SET_USER_NAME
} from '../types';

const GithubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            };

        case GET_USER_DETAILS:
            return {
                ...state,
                loading: false,
                userDetails: action.payload
            };

        case GET_USER_REPOS:
            return {
                ...state,
                loading: false,
                repos: action.payload
            };

        case DEFAULT_USERS:
            return {
                ...state,
                loading: false,
                isSearchedResults: false,
                users: action.payload
            };

        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            };

        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case SET_IS_SEARCH_RESULTS:
            return {
                ...state,
                isSearchedResults: true
            };

        default:
            return state;
    }
};

export default GithubReducer;
