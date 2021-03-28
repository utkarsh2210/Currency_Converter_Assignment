import React from "react";

const HeaderBar = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center headerBar">
      <div className="mr-4 headerNames">
        COUNTRY NAMES<div className="d-flex flex-column p-1"></div>
        <i
          style={{ color: "white" }}
          className="fas fa-long-arrow-alt-down"
        ></i>
      </div>
      <div className="mr-4 headerNames">
        CURRENCY CONVERTER<div className="d-flex flex-column p-1"></div>
        <i
          className="fa fa-dollar mr-2"
          style={{ color: "rgb(248 233 143)" }}
        ></i>
        <i className="fas fa-rupee-sign mr-2" style={{ color: "#bae1ff" }}></i>
        <i className="fa fa-eur" style={{ color: "rgb(255 133 110)" }}></i>
      </div>

      <div className="mr-4 headerNames">
        RATES<div className="d-flex flex-column p-1"></div>
        <i
          style={{ color: "white" }}
          className="fas fa-long-arrow-alt-down"
        ></i>
      </div>
    </div>
  );
};

export default HeaderBar;
