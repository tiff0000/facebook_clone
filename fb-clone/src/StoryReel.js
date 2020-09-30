import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRziBa-6Hr1HIGfH_EsK6CTb8hC-50z8_W1sQ&usqp=CAU"
        profileSrc="https://lh3.googleusercontent.com/proxy/gJ0TWkDNFS3DY6VU9JPQ92XhGhhcvE4tWrExjGVAOXIko1eAVZFoCVFEJgmaKPn6v-lNPDZBa0zPhtSDadyRYdmNLQ"
        title="Home ride"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiMxSpMhLSzXwPvLhHvxHvKeFeVNMS2EnXTmxnLqBJlw&usqp=CAU&ec=45699843"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS5XwsHcKvELNEiA--SJSCK-eZeo6oUO4JKA&usqp=CAU"
        title="Birthday party"
      />
      <Story
        image="https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2020/03/07/Pictures/robot-working-with-digital-display_653b0ed2-6069-11ea-ab89-cb4d4e6220f6.jpg"
        profileSrc="https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/Dollar.jpg?itok=WVMxQYoP"
        title="Tech news"
      />
      <Story
        image="data:image/jpeg;base64,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"
        profileSrc="https://www.toux8.com/uploads/allimg/180302/04145T934-0.jpg"
        title="Live Stream"
      />
      <Story
        image="https://lh3.googleusercontent.com/proxy/GA8FwkLGO1cqrvVJsjZLQttDWsTXS6KinBk87djdeZDciqBm3foMwUpAgy8tL4jliudY02QQuoAsVm4by7rPeuVx9dFsYRigMxDn46us8L-eWnviKbz5FBNdeYQ9ysRAvFsuoZXkdoj5h05eRmNIhi_5UNYJfRUD7fZUjEqdXgPwqkA-rHZodc3Og54us109FUEDuLDvqdeD77Ps6f9xzHwxrxzonHnd"
        profileSrc="https://s9.rr.itc.cn/r/wapChange/201610_2_0/a3iymj9243771915855.jpg"
        title="Fitness meal"
      />
    </div>
  );
}

export default StoryReel;
