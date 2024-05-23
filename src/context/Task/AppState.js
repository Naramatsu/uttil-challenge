import React, { useReducer } from "react";
import Reducer from "./reducer";
import { AppContext } from ".";
import {
  ADD_TASK,
  DELETE_TASK,
  LIST_TASKS,
  UPDATE_LIST_TASKS,
  UPDATE_TASK,
} from "./types";
import { initialColumns, initialTasks } from "../../App.data";

const AppState = ({ children }) => {
  const initialState = {
    columns: initialColumns,
    lastIndex: parseInt(initialTasks[initialTasks.length - 1].id),
  };
  const [globalState, dispatch] = useReducer(Reducer, initialState);

  const listTasks = (list) => {
    dispatch({
      type: LIST_TASKS,
      payload: list,
    });
  };

  const updateListTasks = (list) => {
    dispatch({
      type: UPDATE_LIST_TASKS,
      payload: list,
    });
  };

  const addTask = (newTask) => {
    const exists = Object.values(globalState.columns).some((columns) =>
      columns.list.some((taskListed) => taskListed.content === newTask.content)
    );
    if (exists) return true;
    newTask.id = String(parseInt(globalState.lastIndex) + 1);
    dispatch({
      type: ADD_TASK,
      payload: {
        task: newTask,
        lastIndex: newTask.id,
      },
    });
  };

  const deleteTask = ({ taskId, column }) => {
    dispatch({
      type: DELETE_TASK,
      payload: {
        taskId,
        column,
      },
    });
  };

  const updateTask = (editedTask) => {
    dispatch({
      type: UPDATE_TASK,
      payload: editedTask,
    });
  };

  const combineFunctions = {
    listTasks,
    updateListTasks,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
