import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="./images/profile_pic.jpeg"
        profileSrc="/images/ai.jpg"
        title="Tiffany Y"
      />
      <Story image="" profileSrc="" title="Tiffany Y" />
      <Story image="" profileSrc="" title="Tiffany Y" />
      <Story image="" profileSrc="" title="Tiffany Y" />
      <Story image="" profileSrc="" title="Tiffany Y" />
    </div>
  );
}

export default StoryReel;
