import { FiTrash } from "react-icons/fi";

interface TaskProps {
  task: {
    id: number;
    title: string;
    isComplete: boolean;
  };
  handleToggleTaskCompletion(id: number): void;
  handleRemoveTask(id: number): void;
}

export function TaskListItem({
  task,
  handleToggleTaskCompletion,
  handleRemoveTask,
}: TaskProps) {
    
  return (
    <li key={task.id}>
      <div className={task.isComplete ? "completed" : ""} data-testid="task">
        <label className="checkbox-container">
          <input
            type="checkbox"
            readOnly
            checked={task.isComplete}
            onClick={() => handleToggleTaskCompletion(task.id)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>

      <button
        type="button"
        data-testid="remove-task-button"
        onClick={() => handleRemoveTask(task.id)}
      >
        <FiTrash size={16} />
      </button>
    </li>
  );
}
