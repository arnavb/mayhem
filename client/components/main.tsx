import ChatContainer from "./chat-container";

const MainNavbar = () => {
  return (
    <div className="flex w-full items-center border-b-2 border-neutral-400 bg-neutral-200 pl-4 pr-2 pt-3 pb-3">
      <span># general</span>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex w-3/4 flex-col">
      <MainNavbar />
      <ChatContainer />
    </div>
  );
};

export default Main;
