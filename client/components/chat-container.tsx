import MessageContainer from "./message-container";
import PeopleList from "./people-list";

const ChatContainer = () => {
  return (
    <div className="flex h-full">
      <MessageContainer />
      <PeopleList />
    </div>
  );
};

export default ChatContainer;
