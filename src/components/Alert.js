import React from "react";
const Alert = ({ alert }) => {
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} container`}
        style={{ margin: "auto", borderRadius: "5px" }}
      >
        <i className="fas fa-info-circle" style={{ marginRight: "1rem" }}></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
