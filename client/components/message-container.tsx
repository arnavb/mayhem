import { randomPlaceholderImage } from "lib/random-placeholder-image";
import Image from "next/image";
import InputContainer from "./input-container";

interface MessageObject {
  id: number;
  sender: string;
  message: string;
}

interface MessageProps {
  obj: MessageObject;
}

const messages: MessageObject[] = [
  {
    id: 1,
    sender: "person1",
    message: "Hi! I'm using mayhem!",
  },
  {
    id: 2,
    sender: "person2",
    message: "Hey person1! Hope you're enjoying mayhem!",
  },
];

const Message = ({ obj }: MessageProps) => {
  return (
    <div className="m-4 flex">
      <Image
        className="mr-2 h-12 w-12 rounded-full"
        src={randomPlaceholderImage()}
        alt=""
        width={100}
        height={100}
      />
      <div>
        <div className="pr-2">{obj.sender}:</div>
        <div>{obj.message}</div>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  return (
    <div className="flex h-full w-3/4 flex-col bg-neutral-100">
      <div className="flex-1">
        {messages.map((message) => (
          <Message key={message.id} obj={message} />
        ))}
      </div>
      <InputContainer />
    </div>
  );
};

export default MessageContainer;
