import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        src="https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif"
        alt="Loading..."
        style={{
          width: "170px",
          height: "150px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Loader;
