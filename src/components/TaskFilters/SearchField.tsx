import { X } from 'lucide-react';

export function SearchField() {
  return (
    <div className="flex h-9 w-full items-center gap-2 rounded-md border-2 border-slate-300 bg-white pr-1 pl-2.5 transition-colors focus-within:border-slate-500">
      <input
        type="text"
        placeholder="Search tasks..."
        aria-label="Search tasks"
        aria-controls="task-list"
        className="flex-1 outline-none placeholder:text-slate-400 placeholder:italic"
      />
      <button
        type="button"
        aria-label="Clear search"
        className="cursor-pointer rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-600"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
