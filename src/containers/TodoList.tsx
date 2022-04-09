import React from "react";

export default function TodoList() {
  return (
    <div className="w-1/2 my-8 m-auto flex items-center">
      <input
        className="shadow appearance-none border rounded w-full mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="todo"
        type="text"
        placeholder="Truc à faire"
      />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Valider
      </button>
    </div>
  );
}
