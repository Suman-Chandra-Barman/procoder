import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CoderInfo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src="./images/sumon.jpg" />
        </div>
      </div>
      <div>
        <h4>Suman Barman</h4>
        <address>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Thakurgaon,
          Dhaka
        </address>
      </div>
    </div>
  );
};

export default CoderInfo;
