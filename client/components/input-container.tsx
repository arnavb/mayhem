"use client";
import { KeyboardEvent, useState } from "react";

const InputContainer = () => {
  const [inputText, setInputText] = useState("");

  const handleMessageSubmit = (event: KeyboardEvent) => {
    // User pressed enter on their message, so it can be added to the list
    // of messages
    if (event.key === "Enter") {
      console.log(`The user wants to say ${inputText}`);
      setInputText(""); // Clear the input once done
    }
  };

  return (
    <div className="h-20 p-4">
      <input
        type="text"
        className="h-10 w-full appearance-none px-2 text-black"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleMessageSubmit}
      />
    </div>
  );
};

export default InputContainer;
