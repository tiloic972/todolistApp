import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    text: "",
    isDone: false,
  };

  render() {
    return (
      <div className="w-1/2 m-auto">
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              content: { value: string };
            };
            const content = target.content.value;
            console.log(content);
          }}
        >
          <div className="my-8 flex items-center">
            <input
              className="shadow appearance-none border rounded w-full mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="todoContent"
              name="content"
              type="text"
              placeholder="Truc à faire"
            />
            <input
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Valider"
            />
          </div>
        </form>
        <div className="my-6">
          <div className="border border-gray-500 rounded py-2 px-4 opacity-60">
            Aucune tâche à faire
          </div>
        </div>
      </div>
    );
  }
}
