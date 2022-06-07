import { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

import { v4 } from "uuid";

const intialState = {
  tasks: [
    {
      id: "1",
      title: "Title one",
      description: "Some description",
      donde: false,
    },
    {
      id: "2",
      title: "Title two",
      description: "Some description",
      donde: false,
    },
  ],
};

export const GlobalContext = createContext(intialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, intialState);

  const addTask = (task) =>
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(), done: false } });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  const toggleTaskDone = id => dispatch({type: "TOGGLE_TASK_DONE", payload: id})

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}>
      {children}
    </GlobalContext.Provider>
  );
};
