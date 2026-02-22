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
        aria-label="Clear search"
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full pb-1 text-xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
      >
        &times;
      </button>
    </div>
  );
}
