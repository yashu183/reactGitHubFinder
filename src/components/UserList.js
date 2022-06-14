import React from "react";
import User from "./User";
import Loader from "./Loader";

const UserList = (props) => {
  // const { avatar_url, profile_link, user_name } = this.state;
  return !props.loading ? (
    <div style={userContainer}>
      {props.users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  ) : (
    // <p className="text-muted text-center large">Loading...</p>
    <Loader />
  );
};

const userContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
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
