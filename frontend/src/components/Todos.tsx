import dataTypes from "../types";

const Todos = ({ todos }: { todos: dataTypes[] }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
