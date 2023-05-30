import ChatContainer from "./chat-container";

const ChannelNavbar = () => {
  return (
    <div className="flex w-full items-center border-b-2 border-neutral-400 bg-neutral-200 pl-4 pr-2 pt-3 pb-3">
      <span># general</span>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex h-full flex-1 flex-col">
      <ChannelNavbar />
      <ChatContainer />
    </div>
  );
};

export default Main;
