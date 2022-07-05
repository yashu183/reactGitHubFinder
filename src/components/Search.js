import React, { useState } from 'react';
import { useContext } from 'react';
import GithubContext from '../context/github/githubContext';

const Search = () => {
    const githubContextObj = useContext(GithubContext);
    const { searchUser, setAlert, isSearchedResults, getDefaultUsers, setUserName, userName } =
        githubContextObj;

    const onChange = (e) => {
        setUserName(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (userName === '' || !userName) {
            setAlert('Please type something', 'danger');
        } else {
            searchUser(userName);
        }
    };

    return (
        <div className="container">
            <form className="d-flex col-12" onSubmit={submitForm}>
                <input
                    type="text"
                    name="userName"
                    style={{ width: '90%', marginRight: '1rem', borderRadius: '5px' }}
                    value={userName}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    name="submit"
                    className="btn btn-success"
                    style={{ width: '10%', marginRight: '0', borderRadius: '5px' }}
                />
            </form>
            {isSearchedResults && (
                <button
                    className="btn btn-dark btn-block"
                    style={{ borderRadius: '5px' }}
                    onClick={() => {
                        getDefaultUsers();
                        setUserName('');
                    }}>
                    clear
                </button>
            )}
        </div>
    );
};

export default Search;
