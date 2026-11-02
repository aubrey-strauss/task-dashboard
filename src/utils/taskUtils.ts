import type { TaskFormData, TaskFormErrors } from "../types";

// Validate the form data and return an object with error messages for any invalid fields
export function validateTaskForm(data: TaskFormData): TaskFormErrors {
  const errors: TaskFormErrors = {};

  if (!data.title.trim()) {
    errors.title = "Title is required";
  } else if (data.title.trim().length < 3) {
    // If the title is less than 3 characters, set an error message
    errors.title = "Title must be at least 3 characters";
  }

  if (!data.description.trim()) {
    errors.description = "Description is required";
  }

  if (!data.status) {
    errors.status = "Status is required";
  }

  if (!data.priority) {
    errors.priority = "Priority is required";
  }

  if (!data.dueDate) {
    errors.dueDate = "Due Date is required";
  }

  return errors;
}
