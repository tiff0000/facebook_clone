import React from "react";
import "./Sidebar.css";
import SiderbarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Siderbar() {
  return (
    <div className="sidebar">
      <SiderbarRow
        src="https://lh3.googleusercontent.com/proxy/JliIjDjp3jQ62TYWe1vCMud_s854Wgw38A7h6ajpL8qYHlKmvV-Bv8vnGYaE2tQtxmReHwDtig8ooFxOBQrQ-ZaGy_YSMoFOglzl0ngcWYvs"
        title="TiffanyY"
      />
      <SiderbarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SiderbarRow Icon={PeopleIcon} title="Friends" />
      <SiderbarRow Icon={ChatIcon} title="Messenger" />
      <SiderbarRow Icon={StorefrontIcon} title="Marketplace" />
      <SiderbarRow Icon={VideoLibraryIcon} title="videos" />
      <SiderbarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Siderbar;
