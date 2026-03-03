import type { Task } from './Task';

export interface UseTasksReturn {
  tasks: Task[];
  search: string;
  filterStatus: 'all' | 'completed' | 'pending';
  sortOrder: 'asc' | 'desc';
  setSearch: (value: string) => void;
  setFilterStatus: (status: 'all' | 'completed' | 'pending') => void;
  setSortOrder: (sort: 'asc' | 'desc') => void;
  handleAddTask: (title: string, category: string) => void;
  handleDeleteTask: (id: string) => void;
  handleToggleDone: (id: string) => void;
}
