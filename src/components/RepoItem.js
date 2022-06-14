import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>
        {" "}
        <h5 className="card-title">{repo.name}</h5>
      </a>
    </div>
  );
};

export default RepoItem;
