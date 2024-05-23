import React, { useState } from "react";
import {
  cancelLabel,
  createLabel,
  descriptionLabel,
  taskCreationLabel,
} from "../../constants";

import "./ModalCreateTask.style.scss";

const ModalCreateTask = ({ column, totalTask, addColumn, onClose }) => {
  const taskFormInitialState = {
    id: null,
    content: "",
    status: column,
  };
  const [taskForm, setTaskForm] = useState(taskFormInitialState);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const newTask = taskForm;
    newTask.id = totalTask + 1;
    addColumn({
      task: newTask,
      column,
    });
    setTaskForm(taskFormInitialState);
    onClose();
  };

  return (
    <section className="modal">
      <section className="modal-container">
        <h3>{taskCreationLabel}</h3>
        <form onSubmit={handlerSubmit}>
          <label>{descriptionLabel}</label>
          <input
            autoFocus
            type="text"
            placeholder={descriptionLabel}
            value={taskForm.content}
            onChange={(event) =>
              setTaskForm({
                ...taskForm,
                content: event.target.value,
              })
            }
          />
          <button type="submit">{createLabel}</button>
          <button type="reset" onClick={onClose} className="cancel">
            {cancelLabel}
          </button>
        </form>
      </section>
    </section>
  );
};

export default ModalCreateTask;
