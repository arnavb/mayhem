"use client";
import { useState } from "react";

const InputContainer = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="h-20 p-4">
      <input
        type="text"
        className="h-10 w-full appearance-none px-2 text-black"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default InputContainer;
