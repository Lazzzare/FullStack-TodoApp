import dataTypes from "../types";
import circle from "../assets/Circle.svg";
import cross from "../assets/icon-cross.svg";

const Todos = ({
  todos,
  darkMode,
}: {
  todos: dataTypes[];
  darkMode: boolean;
}) => {
  return (
    <div className="mx-auto mt-4">
      {todos.map((todo) => {
        return (
          <div
            key={todo._id}
            className={`${
              darkMode
                ? "bg-[#25273D] text-[#C8CBE7]"
                : "bg-white text-[#494C6B]"
            }`}
          >
            <div className="relative w-[327px] flex py-5">
              <img src={circle} alt="circle" className="absolute left-4" />
              <h1 className="pl-[52px]">{todo.title}</h1>
              <img src={cross} alt="cross" className="absolute right-4" />
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
        className={`w-full flex items-center justify-between px-5 py-4 rounded-b-md ${
          darkMode ? "bg-[#25273D] text-[#C8CBE7]" : "bg-white text-[#494C6B]"
        }`}
      >
        <span>{todos.length} items left</span>
        <button>Clear Completed</button>
      </div>
      {/* All/Active/Completed */}
      <div
        className={`mt-4 flex items-center justify-evenly py-4 rounded-md ${
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
