import { useState } from "react";
import axios from "axios";
import types from "../types";
import { motion } from "framer-motion";

const Input = ({
  darkMode,
  setTodos,
}: {
  darkMode: boolean;
  setTodos: React.Dispatch<React.SetStateAction<types[]>>;
}) => {
  const [input, setInput] = useState("");

  const handleSaveInput = async () => {
    try {
      const newTodo = {
        title: input,
      };
      const response = await axios.post(
        "https://fullstack-todoapp-4od8.onrender.com/",
        newTodo
      );

      response.data &&
        setTodos &&
        setTodos((prevData) => [...prevData, response.data]);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto -mt-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveInput();
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <input
              className={`${
                darkMode ? "bg-[#25273D] text-white" : "bg-white text-[#25273D]"
              } w-[327px] md:w-[540px] rounded-md py-[18px] pl-[52px]`}
              type="text"
              placeholder="Create a new todo…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default Input;
