import type { TaskItemProps } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
  // onEdit(task) sends everything about the task (title, description, and so on)
  // so the form can show its current values for you to change.
  onEdit,
}: TaskItemProps) {
  return (
    <li className={`task-item ${task.status} ${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="priority">Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => onStatusChange(task.id, "pending")}>
        Pending
      </button>
      <button onClick={() => onStatusChange(task.id, "in-progress")}>
        In Progress
      </button>
      <button onClick={() => onStatusChange(task.id, "completed")}>
        Completed
      </button>
      {/* Add button for onEdit */}
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
