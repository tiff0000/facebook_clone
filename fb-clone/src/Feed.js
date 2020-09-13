import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://lh3.googleusercontent.com/proxy/JliIjDjp3jQ62TYWe1vCMud_s854Wgw38A7h6ajpL8qYHlKmvV-Bv8vnGYaE2tQtxmReHwDtig8ooFxOBQrQ-ZaGy_YSMoFOglzl0ngcWYvs"
        message="wow delicious suchi :) Must try it out!"
        timestamp="Jan 21"
        username="tiff0000"
        image="https://lh3.googleusercontent.com/proxy/vIr0CHHaUn9bJLdDcI3eVJvABAKXohMHXg2EhD-9D5aXoXhS2zHZaGP-6nACk4X0oZq4545GRMX6CEGURcXnuiRl2zZJr_FrghPhyc-Bu_j3ojvw09ALCLNgtw"
      />

      <Post
        profilePic="https://www.toux8.com/uploads/allimg/180302/04145T934-0.jpg"
        message="wow"
        timestamp="Jan 4"
        username="Bill"
        image="https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/1millionjaypark.png"
      />

      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS5XwsHcKvELNEiA--SJSCK-eZeo6oUO4JKA&usqp=CAU"
        message="Today's workout is so hard! Just got home. Feeling exhausted. "
        timestamp="Jan 1"
        username="Lucy"
        image=""
      />
      {/* MessageSender */}
    </div>
  );
}

export default Feed;
