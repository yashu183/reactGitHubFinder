// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // const UserDetails = (props) => {
// //   const params = GetRouterData();
// //   console.log(params);
// //   const userDetails = getUserDetails(params.userName);
// //   console.log(userDetails);
// //   const { name, avatar_url } = userDetails;
// // return (
// //   <>
// //     <div>{name}</div>;
// //     <img src={avatar_url} alt="profile img" />
// //   </>
// // );
// // };

// // componentDidMount() {

// // }

// // function GetRouterData() {
// //   const params = useParams();
// //   return params;
// // }

// // const getUserDetails = async (userName) => {
// //   const clientId = "46b60176b54753d8e301";
// //   const clientSecret = "e3856ea4f79cbbf09008f3692a06457ab94e653a";
// //   const response = await axios.get(
// //     `https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`
// //   );
// //   return response.data;
// // };

// // export default UserDetails;

// import React, { Component } from "react";
// import axios from "axios";

// export class UserDetails extends Component {
//   async componentDidMount() {
//     // const data = this.GetRouterData();
//     const queryParams = new URLSearchParams(window.location.search);
//     // const userName = queryParams.get("userName");
//     console.log(this.props);
//     const userName = this.props.match.params;
//     console.log(userName);
//     const res = await this.getUserDetails();
//     console.log(res);
//   }

//   getUserDetails = async (userName) => {
//     const clientId = "46b60176b54753d8e301";
//     const clientSecret = "e3856ea4f79cbbf09008f3692a06457ab94e653a";
//     const response = await axios.get(
//       `https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`
//     );
//     return response.data;
//   };

//   render() {
//     // const { name, avatar_url } = this.props.UserDetails;
// return (
//   // <>
//   //   <div>{name}</div>;
//   //   <img src={avatar_url} alt="profile img" />
//   // </>
//   <div></div>
//     );
//   }
// }

// // function GetRouterData() {
// //   const params = useParams();
// //   return params;
// // }

// export default UserDetails;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Repos from "./Repos";

const UserDetails = ({
  getUserDetails,
  userDetails,
  loading,
  getUserRepos,
  repos,
}) => {
  const routeData = useParams();

  useEffect(() => {
    getUserDetails(routeData.userName);
    getUserRepos(routeData.userName);
  }, [getUserDetails, getUserRepos, routeData.userName]);
  // console.log(userDetails);
  const {
    name,
    avatar_url,
    hireable,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    email,
    bio,
    location,
    company,
    html_url,
    login,
    blog,
  } = userDetails;
  return (
    <>
      <div className="container">
        <Link to="/" className="btn btn-dark rounded my-2">
          Back to search
        </Link>
        <div className="my-2" style={{ width: "fit-content", float: "right" }}>
          <strong>Hireable : </strong>{" "}
          {hireable ? (
            <i class="fas fa-check text-success"></i>
          ) : (
            <i
              className="fa fa-times-circle text-danger"
              style={{ fontSize: "1.5rem" }}
            ></i>
          )}
        </div>
        <div className="d-flex flex-row flex-wrap">
          <div className="card w-100 d-flex flex-row flex-wrap justify-content-center">
            {/* img, name and location */}
            <div className="w-50">
              <img
                src={avatar_url}
                alt="profile img"
                className="card-img-top w-50 rounded-circle d-block mx-auto"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              ></img>
              <div className="card-body w-100 text-center">
                <h3 className="card-title">{name}</h3>
                {location && (
                  <div className="card-subtitle">
                    <strong>Location : </strong>
                    {location}
                  </div>
                )}
              </div>
            </div>
            {/* bio, visit github profile and user metadata */}
            <div className="w-50">
              <div className="w-100 card-title">
                <h5>Bio</h5>
              </div>
              <p className="card-subtitle">{bio}</p>
              {!bio && (
                <p
                  className="d-flex align-items-center"
                  style={{ height: "150px" }}
                >
                  <span className="mx-auto" style={{ fontStyle: "italic" }}>
                    No Bio
                  </span>
                </p>
              )}

              <a href={html_url} className="btn btn-block btn-success my-1">
                Visit Github profile
              </a>

              <ul className="d-flex flex-row flex-wrap">
                <li className="my-2 mx-3">
                  <strong>Username : </strong>
                  {login}
                </li>
                <li className="my-2 mx-3">
                  <strong>Email : </strong>
                  {email ? (
                    email
                  ) : (
                    <span
                      className="text-muted"
                      style={{ fontStyle: "italic" }}
                    >
                      Not provided
                    </span>
                  )}
                </li>
                <li className="my-2 mx-3">
                  <strong>Website : </strong>
                  {blog ? (
                    blog
                  ) : (
                    <span
                      className="text-muted"
                      style={{ fontStyle: "italic" }}
                    >
                      Not provided
                    </span>
                  )}
                </li>
                <li className="my-2 mx-3">
                  <strong>Company : </strong>
                  {company ? (
                    company
                  ) : (
                    <span
                      className="text-muted"
                      style={{ fontStyle: "italic" }}
                    >
                      Not provided
                    </span>
                  )}
                </li>
                <li className="my-2 mx-3 w-100">
                  <section className="mx-auto">
                    <strong>Twitter Username : </strong>
                    {twitter_username ? (
                      twitter_username
                    ) : (
                      <span
                        className="text-muted"
                        style={{ fontStyle: "italic" }}
                      >
                        Not provided
                      </span>
                    )}
                  </section>
                </li>
              </ul>
            </div>
            {/* followers and following */}
            <div
              className="w-100 pt-3 pb-1"
              style={{
                borderTop: "solid 1px #e5e5e5",
                borderBottom: "solid 1px #e5e5e5",
              }}
            >
              <ul className="d-flex flex-row flex-wrap justify-content-center  mx-auto">
                <li
                  className="badge badge-primary p-2"
                  style={{ fontSize: "14px" }}
                >
                  <strong>Followers : </strong>
                  {followers}
                </li>
                <li
                  className="badge badge-success p-2"
                  style={{ fontSize: "14px" }}
                >
                  <strong>Following : </strong>
                  {following}
                </li>
                <li
                  className="badge badge-danger p-2"
                  style={{ fontSize: "14px" }}
                >
                  <strong>Public repos : </strong>
                  {public_repos}
                </li>
                <li
                  className="badge badge-dark p-2"
                  style={{ fontSize: "14px" }}
                >
                  <strong>Public gists : </strong>
                  {public_gists}
                </li>
              </ul>
            </div>
            <div className="w-100 card">
              <h3 className="card-title">Repos :</h3>
              <Repos repos={repos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
