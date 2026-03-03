import { useState, useEffect } from 'react';

import type { Task } from '../interfaces/Task';
import type { UseTasksReturn } from '../interfaces/UseTasksReturn';

const MY_TASKS = '@todo-app:my-tasks';

export function useTasks(): UseTasksReturn {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem(MY_TASKS);

      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error('Local storage is unavailable:', error);

      return [];
    }
  });
  const [search, setSearch] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<
    'all' | 'completed' | 'pending'
  >('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAndSortedTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesStatus =
        filterStatus === 'all' ||
        (filterStatus === 'completed' && task.isDone) ||
        (filterStatus === 'pending' && !task.isDone);

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });

  useEffect(() => {
    try {
      localStorage.setItem(MY_TASKS, JSON.stringify(tasks));
    } catch (error) {
      console.error('Local storage is unavailable:', error);
    }
  }, [tasks]);

  const handleAddTask = (title: string, category: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      category,
      isDone: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleDone = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return {
    tasks: filteredAndSortedTasks,
    search,
    filterStatus,
    sortOrder,
    setSearch,
    setFilterStatus,
    setSortOrder,
    handleAddTask,
    handleDeleteTask,
    handleToggleDone,
  };
}
