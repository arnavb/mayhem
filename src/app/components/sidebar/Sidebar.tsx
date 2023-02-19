import ChannelList from "./channels/ChannelListContainer";
import ServerList from "./ServerList";

const Sidebar = () => {
  return (
    <div className="w-1/4 flex shrink-0">
      <ServerList />
      <ChannelList />
    </div>
  );
};

export default Sidebar;
