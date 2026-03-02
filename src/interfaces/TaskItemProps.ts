import type { Task } from './Task';

export interface TaskItemProps {
  task: Task;
  onToggleDone: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
