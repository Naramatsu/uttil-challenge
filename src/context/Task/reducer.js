import {
  ADD_TASK,
  DELETE_TASK,
  LIST_TASKS,
  UPDATE_LIST_TASKS,
  UPDATE_TASK,
} from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_TASKS:
    case UPDATE_LIST_TASKS:
      return {
        ...state,
        columns: payload,
      };
    case ADD_TASK:
      const { task, lastIndex } = payload;
      return {
        ...state,
        lastIndex,
        columns: {
          ...state.columns,
          [task.status]: {
            ...state.columns[task.status],
            list: [...state.columns[task.status].list, task],
          },
        },
      };
    case DELETE_TASK:
      const { taskId, column } = payload;
      return {
        ...state,
        columns: {
          ...state.columns,
          [column]: {
            ...state.columns[column],
            list: state.columns[column].list.filter(
              (task) => task.id !== taskId
            ),
          },
        },
      };
    case UPDATE_TASK:
      const oldTask = state.columns[payload.status].list.find(
        (task) => task.id === payload.id
      );
      oldTask.content = payload.content;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
