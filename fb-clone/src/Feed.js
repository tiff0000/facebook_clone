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
      <Post />
      <Post />
      <Post
        profilePic="https://lh3.googleusercontent.com/proxy/JliIjDjp3jQ62TYWe1vCMud_s854Wgw38A7h6ajpL8qYHlKmvV-Bv8vnGYaE2tQtxmReHwDtig8ooFxOBQrQ-ZaGy_YSMoFOglzl0ngcWYvs"
        message="wow"
        timestamp="timestamp"
        username="tiff0000"
        image="https://lh3.googleusercontent.com/proxy/vIr0CHHaUn9bJLdDcI3eVJvABAKXohMHXg2EhD-9D5aXoXhS2zHZaGP-6nACk4X0oZq4545GRMX6CEGURcXnuiRl2zZJr_FrghPhyc-Bu_j3ojvw09ALCLNgtw"
      />
      {/* MessageSender */}
    </div>
  );
}

export default Feed;
