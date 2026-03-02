import { useState } from 'react';

import type { Task } from './interfaces/Task';

import { CreateTask } from './components/CreateTask';
import { TaskFilters } from './components/TaskFilters';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return (
    <main className="flex min-h-dvh w-full items-center justify-center px-4 py-6">
      <div className="w-full max-w-2xl rounded-xl bg-slate-100 p-6 shadow-[0_0_20px_4px_rgba(30,41,59,0.15)]">
        <h1 className="text-center text-[clamp(2.2rem,5vw,2.8rem)] font-semibold tracking-tight text-slate-800">
          To-do List
        </h1>
        <CreateTask onSubmit={handleAddTask} />
        <TaskFilters />
        <TaskList
          tasks={tasks}
          onToggleDone={handleToggleDone}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </main>
  );
}

export default App;
