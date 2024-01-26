import { useState } from "react";
import axios from "axios";

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
            } w-[327px] md:w-[540px] rounded-md py-[18px] pl-[52px]`}
            type="text"
            placeholder="Create a new todo…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
