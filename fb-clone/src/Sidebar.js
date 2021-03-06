import React from "react";
import "./Sidebar.css";
import SiderbarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Siderbar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SiderbarRow src={user.photoURL} title={user.displayName} />
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
