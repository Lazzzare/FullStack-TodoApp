import { useState } from "react";
import axios from "axios";
import circle from "./../assets/Circle.svg";

const Input = ({ darkMode }: { darkMode: boolean }) => {
  const [input, setInput] = useState("");

  const handleSaveInput = () => {
    const newTodo = {
      title: input,
    };
    axios.post("http://localhost:3001/", newTodo).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="mx-auto -mt-24">
      <form onSubmit={handleSaveInput}>
        <div className="relative">
          <input
            className={`${
              darkMode ? "bg-[#25273D]" : "bg-white"
            } w-[327px] rounded-md py-[18px] pl-[52px]`}
            type="text"
            placeholder="Create a new todo…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <img
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
            src={circle}
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
