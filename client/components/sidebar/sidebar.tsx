import ChannelList from "./channel-list-container";
import ServerList from "./server-list";

const Sidebar = () => {
  return (
    <div className="flex w-1/4 shrink-0 bg-neutral-300">
      <ServerList />
      <ChannelList />
    </div>
  );
};

export default Sidebar;
