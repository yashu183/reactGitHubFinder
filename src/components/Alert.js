import React from 'react';
import { useContext } from 'react';
import GithubContext from '../context/github/githubContext';

const Alert = () => {
    const githubContetObj = useContext(GithubContext);
    const { alert } = githubContetObj;
    return (
        alert && (
            <div
                className={`alert alert-${alert.type} container`}
                style={{ margin: 'auto', borderRadius: '5px' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '1rem' }}></i>
                {alert.msg}
            </div>
        )
    );
};

export default Alert;
