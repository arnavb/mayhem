import ChannelList from "./ChannelListContainer";
import ServerList from "./ServerList";

const Sidebar = () => {
  return (
    <div className="flex w-1/4 shrink-0">
      <ServerList />
      <ChannelList />
    </div>
  );
};

export default Sidebar;
