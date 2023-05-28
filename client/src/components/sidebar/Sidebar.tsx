import ChannelList from "./ChannelListContainer";
import ServerList from "./ServerList";

const Sidebar = () => {
  return (
    <div className="flex w-1/4 shrink-0 border-r">
      <ServerList />
      <ChannelList />
    </div>
  );
};

export default Sidebar;
