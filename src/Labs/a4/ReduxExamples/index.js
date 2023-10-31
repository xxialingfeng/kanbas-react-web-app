import React from "react";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import Todos from "./todos/TodoList";
const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <Todos />
      <todosReducer />
    </div>
  );
};

export default ReduxExamples;