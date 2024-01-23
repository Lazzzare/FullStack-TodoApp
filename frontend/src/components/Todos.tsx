import dataTypes from "../types";
import circle from "../assets/Circle.svg";
import cross from "../assets/icon-cross.svg";
import axios from "axios";

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

  return (
    <div className=" px-4 mt-4">
      {todos.map((todo) => {
        return (
          <div
            key={todo._id}
            className={` rounded-t-lg w-[327px] mx-auto ${
              darkMode
                ? "bg-[#25273D] text-[#C8CBE7]"
                : "bg-white text-[#494C6B]"
            }`}
          >
            <div className="relative rounded-t-lg flex py-5">
              <img src={circle} alt="circle" className="absolute left-4" />
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
        className={`w-[327px] mx-auto flex items-center justify-between px-5 py-4 rounded-b-md ${
          darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
        }`}
      >
        <span>{todos.length} items left</span>
        <button>Clear Completed</button>
      </div>
      {/* All/Active/Completed */}
      <div
        className={`w-[327px] mx-auto mt-4 flex items-center justify-evenly py-4 rounded-md ${
          darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
        }`}
      >
        <h2>All</h2>
        <h2>Active</h2>
        <h2>Completed</h2>
      </div>
    </div>
  );
};

export default Todos;
