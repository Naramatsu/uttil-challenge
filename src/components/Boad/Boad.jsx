import React, { useContext } from "react";
import Column from "../Column";
import { AppContext } from "../../context/Task";
import { DragDropContext } from "react-beautiful-dnd";
import "./Boad.style.scss";

const Boad = () => {
  const { columns, updateListTasks } = useContext(AppContext);
  const handlerDragEnd = ({ source, destination }) => {
    if (!destination) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {
      const newList = start.list.filter((_, index) => index !== source.index);

      newList.splice(destination.index, 0, start.list[source.index]);

      const newColumn = {
        id: start.id,
        list: newList,
        label: start.label,
      };

      updateListTasks({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      const newStartList = start.list.filter(
        (_, index) => index !== source.index
      );

      const newStartColumn = {
        id: start.id,
        list: newStartList,
        label: start.label,
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndColumn = {
        id: end.id,
        list: newEndList,
        label: end.label,
      };

      updateListTasks({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      });
    }
  };

  return (
    <section className="container">
      <DragDropContext onDragEnd={handlerDragEnd}>
        <section className="board">
          {Object.values(columns).map((column) => (
            <Column column={column} key={column.id} />
          ))}
        </section>
      </DragDropContext>
    </section>
  );
};

export default Boad;
