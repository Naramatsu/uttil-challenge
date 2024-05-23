import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaRegTrashCan, FaCheck } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import "./Task.style.scss";

const Task = ({ text, index, column, deleteTask, taskId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [taskText, setTasktext] = useState(text);

  const handlerUpdateT1ask = (event) => {
    if (event.key !== "Enter") return;

    setIsEdit(false);
    console.log("updating");
  };

  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <section
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEdit ? (
            <>
              <input
                value={taskText}
                onKeyDown={handlerUpdateT1ask}
                onChange={(event) => setTasktext(event.target.value)}
              />
              <section className="btn-group">
                <FaCheck
                  className="btn-check-task"
                  // onClick={() => setIsEdit(true)}
                />
                <IoMdClose
                  className="btn-close-task"
                  onClick={() => {
                    setTasktext(text);
                    setIsEdit(false);
                  }}
                />
              </section>
            </>
          ) : (
            <>
              <p onClick={() => console.log("asdasd")}>
                {text}
                <span className={column}></span>
              </p>
              <section className="btn-group">
                <HiOutlinePencilSquare
                  className="btn-edit-task"
                  onClick={() => setIsEdit(true)}
                />
                <FaRegTrashCan
                  onClick={() =>
                    deleteTask({
                      column,
                      taskId,
                    })
                  }
                  className="btn-delete-task"
                />
              </section>
            </>
          )}
        </section>
      )}
    </Draggable>
  );
};

export default Task;
