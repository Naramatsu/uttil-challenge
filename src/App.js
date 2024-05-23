import React, { useState } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { initialColumns } from "./App.data.js";
import "./App.scss";

const App = () => {
  const [columns, setColumns] = useState(initialColumns);

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

      setColumns((prevState) => ({ ...prevState, [newColumn.id]: newColumn }));
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

      setColumns((prevState) => ({
        ...prevState,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      }));
    }
  };

  const handlerAddTask = ({ task, column }) => {
    setColumns({
      ...columns,
      [column]: {
        ...columns[column],
        list: [...columns[column].list, task],
      },
    });
  };

  const handlerDeleteTask = ({ taskId, column }) => {
    setColumns({
      ...columns,
      [column]: {
        ...columns[column],
        list: columns[column].list.filter((task) => task.id !== taskId),
      },
    });
  };

  return (
    <main className="App">
      <h1>UTTIL Frontend (ReactJs) Challenge por Jonathan Narvaez</h1>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <section className="box">
          {Object.values(columns).map((column) => (
            <Column
              column={column}
              key={column.id}
              addColumn={handlerAddTask}
              deleteTask={handlerDeleteTask}
            />
          ))}
        </section>
      </DragDropContext>
    </main>
  );
};

export default App;
