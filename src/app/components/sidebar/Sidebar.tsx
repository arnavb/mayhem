import ChannelList from "./channels/ChannelList";
import ServerList from "./ServerList";

const Sidebar = () => {
  return (
    <div className="w-1/4 flex">
      <ServerList />
      <ChannelList />
    </div>
  );
};

export default Sidebar;
