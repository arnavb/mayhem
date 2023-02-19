const ChannelServerName = ({ name }: { name: string }) => {
  return (
    <div className="flex bg-gray-900 w-full pl-4 pr-2 pt-3 pb-3 items-center shadow-md">
      <span className="text-white">{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="ml-auto align-middle w-5 aspect-square"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

const ChannelName = ({ name }: { name: string }) => {
  return (
    <>
      <li className="text-gray-300 pl-1 pt-1 pb-1 hover:bg-gray-600 rounded cursor-pointer">
        # {name}
      </li>
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
    <div className="w-3/4 bg-gray-800 shadow-inner">
      <ChannelServerName name="Server Name" />
      <ChannelList />
    </div>
  );
};

export default ChannelListContainer;
