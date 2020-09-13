import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profileSrc} className="avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
