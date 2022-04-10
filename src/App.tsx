import React from "react";
import AppNavigator from "./components/AppNavigator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full">
      <AppNavigator />
      <TodoList />
    </div>
  );
}

export default App;
