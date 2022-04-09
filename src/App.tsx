import React from "react";
import AppNavigator from "./containers/AppNavigator";
import TodoList from "./containers/TodoList";

function App() {
  return (
    <div className="w-full">
      <AppNavigator />
      <TodoList />
    </div>
  );
}

export default App;
