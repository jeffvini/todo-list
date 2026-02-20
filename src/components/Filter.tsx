export function Filter() {
  return (
    <section
      aria-labelledby="filter-title"
      className="mt-6 flex flex-col gap-4 border-b-2 border-b-slate-400 pb-7"
    >
      <h2
        id="filter-title"
        className="text-[clamp(1.6rem,4vw,1.8rem)] font-medium text-slate-800"
      >
        Filter
      </h2>
      <div className="flex items-end gap-[clamp(1.6rem,8vw,4rem)]">
        <div className="flex flex-1 flex-col gap-3">
          <label
            htmlFor="filter-status"
            className="cursor-pointer text-xs font-bold tracking-wider text-slate-700 uppercase"
          >
            Status
          </label>
          <select
            name="status"
            id="filter-status"
            aria-controls="task-list"
            className="h-9 cursor-pointer rounded-md border-2 border-slate-300 bg-white px-1.5 text-sm transition-colors outline-none focus:border-slate-500"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
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
      </div>
    </section>
  );
}
