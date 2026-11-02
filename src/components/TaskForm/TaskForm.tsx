import { useState } from "react";
import type { TaskFormProps } from "../../types";
import type { TaskFormData } from "../../types";
import type { ChangeEvent } from "react";

export default function TaskForm({
  onSubmit,
  initialData,
  onCancel,
}: TaskFormProps) {
  // If initialData is provided, use it to pre-fill the form fields; otherwise, start with empty strings
  const [formData, setFormData] = useState<TaskFormData>(
    initialData ?? {
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: "",
    },
  );
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <form
      className="task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <label>
        Title:
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Due Date:
        <input
          type="date"
          name="dueDate"
          placeholder="Due Date"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
