import MessageContainer from "./MessageContainer";
import PeopleList from "./PeopleList";

const ChatContainer = () => {
  return (
    <div className="flex flex-grow">
      <MessageContainer />
      <PeopleList />
    </div>
  );
};

export default ChatContainer;
