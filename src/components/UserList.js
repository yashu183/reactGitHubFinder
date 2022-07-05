import React, { useContext } from 'react';
import User from './User';
import Loader from './Loader';

import GithubContext from '../context/github/githubContext';
import { useEffect } from 'react';

const UserList = () => {
    const githubContextObj = useContext(GithubContext);
    var { loading, users, getDefaultUsers, isSearchedResults } = githubContextObj;

    useEffect(() => {
        if (!isSearchedResults) {
            getDefaultUsers();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return !loading ? (
        <div style={userContainer}>
            {users.map((user) => {
                return <User key={user.id} user={user} />;
            })}
        </div>
    ) : (
        <Loader />
    );
};

const userContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default UserList;

// constructor() {
//     super();
//     this.state = {
//         id: 'id',
//         user_name: 'Yashu',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//         profile_link: 'https://api.github.com/users/mojombo'
//     }
// }
// component lvl state
//   state = {
//     id: "1",
//     user_name: "Yashu1",
//     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//     profile_link: "https://api.github.com/users/mojombo",
//   };
// state = {
//   users: [
//     {
//       id: "1",
//       user_name: "Yashu1",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       profile_link: "https://api.github.com/users/mojombo",
//     },
//     {
//       id: "2",
//       user_name: "Yashu2",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       profile_link: "https://api.github.com/users/mojombo",
//     },
//     {
//       id: "3",
//       user_name: "Yashu3",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       profile_link: "https://api.github.com/users/mojombo",
//     },
//   ],
// };
