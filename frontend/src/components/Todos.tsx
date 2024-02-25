import dataTypes from "../types";
import cross from "../assets/icon-cross.svg";
import axios from "axios";
import { motion } from "framer-motion";

const Todos = ({
  todos,
  darkMode,
  setTodos,
}: {
  todos: dataTypes[];
  darkMode: boolean;
  setTodos: React.Dispatch<React.SetStateAction<dataTypes[]>>;
}) => {
  const handleDeleteTodo = (id: string) => {
    axios
      .delete(`https://fullstack-todoapp-4od8.onrender.com/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setTodos((prevTodos: dataTypes[]) =>
          prevTodos.filter((todo: dataTypes) => todo._id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-4 border-t border-black rounded-lg">
        {todos.map((todo) => {
          return (
            <div
              key={todo._id}
              className={`rounded-t-lg ${
                darkMode
                  ? "bg-[#25273D] text-[#C8CBE7]"
                  : "bg-white text-[#494C6B]"
              }`}
            >
              <div className="relative rounded-t-lg flex py-5">
                <h1 className="pl-[52px]">{todo.title}</h1>
                <img
                  onClick={() => handleDeleteTodo(todo._id)}
                  src={cross}
                  alt="cross"
                  className="absolute right-4 cursor-pointer"
                />
              </div>
              <hr
                className={`${
                  darkMode
                    ? "bg-[#25273D] text-[#C8CBE7]"
                    : "bg-white text-[#494C6B]"
                }`}
              />
            </div>
          );
        })}
        {/* ItemsLeft and Clear Completed */}
        <div
          className={`flex items-center justify-between px-5 py-4 rounded-b-md border-b border-b-black ${
            darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
          }`}
        >
          <span>{todos.length} items left</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Todos;
