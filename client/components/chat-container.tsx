import MessageContainer from "./message-container";
import PeopleList from "./people-list";

const ChatContainer = () => {
  return (
    <div className="flex flex-grow">
      <MessageContainer />
      <PeopleList />
    </div>
  );
};

export default ChatContainer;
