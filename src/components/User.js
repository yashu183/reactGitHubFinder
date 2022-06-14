import React from "react";
import { Link } from "react-router-dom";

const User = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="card-img-top w-50 rounded m-auto"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{login}</h3>
        <Link
          to={`/user-details/${login}`}
          className="btn btn-dark btn-md my-1"
        >
          Visit profile
        </Link>
      </div>
    </div>
  );
};

export default User;
