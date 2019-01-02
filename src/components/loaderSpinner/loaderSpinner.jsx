import React from "react";
import "./loaderSpinner.css";

const LoaderSpinner = () => {
  return (
    <div className="lds-css ng-scope center">
      <div
        styles={{ width: "100%", height: "100%" }}
        className="lds-double-ring"
      >
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoaderSpinner;
