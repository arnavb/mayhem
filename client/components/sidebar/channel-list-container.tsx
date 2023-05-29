const ChannelServerName = ({ name }: { name: string }) => {
  return (
    <div className="flex w-full items-center border-b-2 border-neutral-400 bg-neutral-300 pl-4 pr-2 pt-3 pb-3">
      <span>{name}</span>
    </div>
  );
};

const ChannelName = ({ name }: { name: string }) => {
  return (
    <>
      <li className="cursor-pointer rounded pl-1 pt-1 pb-1"># {name}</li>
    </>
  );
};

const ChannelList = () => {
  return (
    <ul className="p-3">
      <ChannelName name="general" />
      <ChannelName name="memes" />
      <ChannelName name="help" />
      <ChannelName name="cat-photos" />
    </ul>
  );
};

const ChannelListContainer = () => {
  return (
    <div className="w-3/4">
      <ChannelServerName name="Server Name" />
      <ChannelList />
    </div>
  );
};

export default ChannelListContainer;
