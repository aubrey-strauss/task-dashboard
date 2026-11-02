// The only 3 statuses a task can have
export type TaskStatus = "pending" | "in-progress" | "completed";

// The only 3 priorities a task can have (named once, reused everywhere)
export type TaskPriority = "low" | "medium" | "high";

// What one task looks like
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

// Form data = a Task without the id (App creates the id when saving)
export type TaskFormData = Omit<Task, "id">;

// Any form field can optionally have an error message
export type TaskFormErrors = Partial<Record<keyof TaskFormData, string>>;

// The ways the list can be sorted
export type SortOption = "dueDate" | "priority" | "title";

// The filter choices (all optional: blank means "show all")
export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
}

// Props for the list of tasks
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}

// Props for one task card
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}

// Props for the filter bar
export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}

// Props for the add/edit form
export interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  initialData?: TaskFormData; // filled in when editing an existing task
  onCancel?: () => void; // optional "Cancel" button for editing
}
