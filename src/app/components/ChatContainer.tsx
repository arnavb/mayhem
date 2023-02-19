import MessageContainer from "./MessageContainer";
import PeopleList from "./PeopleList";

const ChatContainer = () => {
  return (
    <div className="flex-grow flex">
      <MessageContainer />
      <PeopleList />
    </div>
  );
};

export default ChatContainer;
