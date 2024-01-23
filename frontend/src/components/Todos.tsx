import dataTypes from "../types";
import circle from "../assets/Circle.svg";
import checkedCircle from "../assets/CompleteCircle.svg";
import cross from "../assets/icon-cross.svg";
import axios from "axios";
import { useState } from "react";

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
      .delete(`http://localhost:3001/${id}`)
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

  const [check, setCheck] = useState(false);

  return (
    <div className="mt-4">
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
              {check ? (
                <img
                  src={checkedCircle}
                  alt="checkedCircle"
                  className="absolute left-4"
                  onClick={() => setCheck(!check)}
                />
              ) : (
                <img
                  src={circle}
                  alt="circle"
                  className="absolute left-4"
                  onClick={() => setCheck(!check)}
                />
              )}
              <h1 className="pl-[52px]">{todo.title}</h1>
              <img
                onClick={() => handleDeleteTodo(todo._id)}
                src={cross}
                alt="cross"
                className="absolute right-4"
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
        className={`flex items-center justify-between px-5 py-4 rounded-b-md ${
          darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
        }`}
      >
        <span>{todos.length} items left</span>
        <button>Clear Completed</button>
      </div>
      {/* All/Active/Completed */}
      <div
        className={`${
          darkMode ? "container-dark" : "container-light"
        } container mt-4 flex items-center justify-evenly py-4 rounded-md ${
          darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
        }`}
      >
        <h2 className="cursor-pointer">All</h2>
        <h2 className="cursor-pointer">Active</h2>
        <h2 className="cursor-pointer">Completed</h2>
      </div>
    </div>
  );
};

export default Todos;
