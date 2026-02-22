export function SortButtons() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
        Sort
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          aria-pressed="true"
          aria-label="Sort tasks by name in ascending order"
          aria-controls="task-list"
          className="h-9 flex-1 cursor-pointer rounded-md border-2 border-slate-700 bg-slate-700 px-3 text-xs font-bold whitespace-nowrap text-white transition-all active:scale-95"
        >
          A-Z
        </button>
        <button
          type="button"
          aria-pressed="false"
          aria-label="Sort tasks by name in descending order"
          aria-controls="task-list"
          className="h-9 flex-1 cursor-pointer rounded-md border-2 border-transparent bg-slate-200 px-3 text-xs font-bold whitespace-nowrap text-slate-500 transition-all hover:border-slate-400 hover:text-slate-700 active:scale-95"
        >
          Z-A
        </button>
      </div>
    </div>
  );
}
