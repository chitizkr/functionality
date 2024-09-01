import React, { useState } from "react";
import "./TodoList.css";
// import List from "./components/list/List";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([
    {
      task: "read",
      status: true,
      id: 1,
    },
    {
      task: "exercise",
      status: false,
      id: 2,
    },
  ]);

  function listHandler(event) {
    event.preventDefault();
    setTask((prev) => [
      ...prev,
      { task: input, status: false, id: Math.floor(Math.random() * 100) },
    ]);
  }

  function handleToggle(id) {
    setTask((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, status: !data.status } : data
      )
    );
  }

  function deleteHandler(id) {
    setTask((prev) => prev.filter((data) => data.id !== id));
  }

  return (
    <>
      <div className="head">
        <h2> My to do List </h2>
      </div>
      <form className="input" onSubmit={listHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      {/* <List datas={sampleData} /> */}
      <div>
        <ul>
          {task.map((data) => (
            <li key={data.id}>
              <>
                <span
                  style={{
                    textDecoration: data.status ? "line-through" : "none",
                  }}
                >
                  {data.task}
                </span>

                <input
                  type="checkbox"
                  checked={data.status}
                  onChange={() => handleToggle(data.id)}
                />
                <button type="text" onClick={() => deleteHandler(data.id)}>
                  delete
                </button>
              </>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

//notes

// to have an action in an list of items such as a button ,checkbox,or such event you have to pass an id as an argument to event handling funtion
