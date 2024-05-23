import React, { useState, useContext } from "react";
import { AppContext } from "../../context/Task";
import {
  CANCEL,
  ERROR,
  cancelLabel,
  createLabel,
  descriptionLabel,
  existingTaskMessage,
  taskCreationLabel,
} from "../../constants";

import "./ModalCreateTask.style.scss";

const ModalCreateTask = ({ column, onClose }) => {
  const { addTask } = useContext(AppContext);
  const taskFormInitialState = {
    id: null,
    content: "",
    status: column,
  };
  const [taskForm, setTaskForm] = useState(taskFormInitialState);
  const [taskErrorMessage, setTaskErrorMessage] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    const exists = addTask(taskForm);

    if (!exists) {
      setTaskForm(taskFormInitialState);
      onClose();
      return false;
    }

    setTaskErrorMessage(existingTaskMessage);
  };

  const handlerTaskChange = (event) => {
    setTaskErrorMessage("");
    setTaskForm({
      ...taskForm,
      content: event.target.value,
    });
  };

  const isErrrorClassName = taskErrorMessage ? ERROR : "";

  return (
    <section className="modal">
      <section className="modal-container">
        <h3>{taskCreationLabel}</h3>
        <form onSubmit={handlerSubmit}>
          <label>{descriptionLabel}</label>
          <input
            className={isErrrorClassName}
            autoFocus
            type="text"
            placeholder={descriptionLabel}
            value={taskForm.content}
            onChange={handlerTaskChange}
          />
          {taskErrorMessage && (
            <label className={isErrrorClassName}>{taskErrorMessage}</label>
          )}
          <button type="submit">{createLabel}</button>
          <button type="reset" onClick={onClose} className={CANCEL}>
            {cancelLabel}
          </button>
        </form>
      </section>
    </section>
  );
};

export default ModalCreateTask;
