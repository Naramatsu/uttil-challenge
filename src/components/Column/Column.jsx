import React, { useState } from "react";
import ModalCreateTask from "../ModalCreateTask";
import Task from "../Task";
import { Droppable } from "react-beautiful-dnd";
import { FaPlus } from "react-icons/fa6";

import "./Column.style.scss";

const Column = ({ column }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { list, id, label } = column;

  return (
    <section className="column">
      <Droppable droppableId={id}>
        {(provided) => (
          <section className="column-container">
            <h2>
              {label}
              <FaPlus
                className="btn-add"
                onClick={() => setIsModalVisible(true)}
              />
            </h2>
            <section
              className="task-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {list.map((task, index) => (
                <Task
                  key={index}
                  text={task.content}
                  taskId={task.id}
                  column={id}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </section>
          </section>
        )}
      </Droppable>
      {isModalVisible && (
        <ModalCreateTask
          column={id}
          totalTask={list.length}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </section>
  );
};

export default Column;
