import { COMPLETED, IN_PROGRESS, PENDING } from "./constants";

const initialTasks = [
  { id: "1", content: "Registrar nuevo cliente", status: PENDING.id },
  { id: "2", content: "Preparar auto para renta", status: IN_PROGRESS.id },
  { id: "3", content: "Inspeccionar auto devuelto", status: COMPLETED.id },
  { id: "4", content: "Actualizar inventario de autos", status: PENDING.id },
  {
    id: "5",
    content: "Enviar recordatorio de devolución",
    status: IN_PROGRESS.id,
  },
];

const columnsAssignator = (column) =>
  initialTasks.filter((task) => task.status === column);

export const initialColumns = {
  [PENDING.id]: {
    id: PENDING.id,
    label: PENDING.label,
    list: columnsAssignator(PENDING.id),
  },
  [IN_PROGRESS.id]: {
    id: IN_PROGRESS.id,
    label: IN_PROGRESS.label,
    list: columnsAssignator(IN_PROGRESS.id),
  },
  [COMPLETED.id]: {
    id: COMPLETED.id,
    label: COMPLETED.label,
    list: columnsAssignator(COMPLETED.id),
  },
};
