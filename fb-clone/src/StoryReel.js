import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRziBa-6Hr1HIGfH_EsK6CTb8hC-50z8_W1sQ&usqp=CAU"
        profileSrc="https://lh3.googleusercontent.com/proxy/WCz7LrL-Gt3wCqSrUw-AnHYUi33cCXkkjMuhkGBHl8UGH2FqGBdbCTK1mCv242KclYiJvb7TToufgqzLKrU7J9MRGhycC97cvOXXMoBfW_jA5qfLfVM"
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
        image="https://lh3.googleusercontent.com/proxy/UKASeD7vHjF9eT2sU3xHybiEQPuyHMH6W6ux8ENPOMaoc-SReE3_IsAHqMWjj528jxZ8ncR-Ae9xGcBuYXfVuSNzspuOkZB42voxPzMNHYlVSg"
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
