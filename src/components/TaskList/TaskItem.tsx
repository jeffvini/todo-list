import type { TaskItemProps } from '../../interfaces/TaskItemProps';

import { Trash2 } from 'lucide-react';

export function TaskItem({ task, onToggleDone }: TaskItemProps) {
  const handleToggleDone = () => {
    onToggleDone(task.id);
  };

  return (
    <li className="flex items-center justify-between gap-5 rounded-md bg-white px-4 py-6 shadow-[0_0_7px_4px_rgb(0,0,0,0.1)]">
      <label className="flex flex-1 cursor-pointer items-center gap-5">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggleDone}
          className="h-4 w-4 cursor-pointer transition-transform active:scale-95"
        />
        <div className="flex flex-1 flex-col gap-2">
          <p
            className={`text-lg text-slate-800 ${task.isDone ? 'line-through opacity-50' : ''}`}
          >
            {task.title}
          </p>
          <span
            className={`text-xs font-bold tracking-widest text-slate-500 uppercase ${task.isDone ? 'line-through opacity-50' : ''}`}
          >
            ({task.category})
          </span>
        </div>
      </label>
      <button
        type="button"
        aria-label="Delete task"
        className="cursor-pointer rounded-lg bg-transparent p-1.5 text-red-400 transition-all hover:bg-red-400 hover:text-white active:scale-95"
      >
        <Trash2 className="size-5" />
      </button>
    </li>
  );
}
