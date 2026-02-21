export function CreateTask() {
  return (
    <section
      aria-labelledby="create-task-title"
      className="mt-6 flex flex-col gap-4 border-b-2 border-b-slate-400 pb-7"
    >
      <h2
        id="create-task-title"
        className="text-[clamp(1.6rem,4vw,1.8rem)] font-medium text-slate-800"
      >
        Create Task
      </h2>
      <input
        type="text"
        placeholder="Enter the title..."
        aria-label="Enter the task title"
        className="h-9 w-full rounded-md border-2 border-slate-300 bg-white px-2.5 transition-colors outline-none placeholder:text-slate-400 placeholder:italic focus:border-slate-500"
      />
      <select
        aria-label="Task category"
        defaultValue=""
        className="h-9 w-full cursor-pointer rounded-md border-2 border-slate-300 bg-white px-1.5 text-sm transition-colors outline-none focus:border-slate-500"
      >
        <option value="" disabled hidden>
          Select a category
        </option>
        <option value="studies">Studies</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <button
        aria-controls="task-list"
        className="w-full cursor-pointer rounded-lg bg-indigo-700 px-4 py-3 font-medium text-white transition-all hover:bg-indigo-800 active:scale-[0.98] md:w-fit md:self-start"
      >
        Create Task
      </button>
    </section>
  );
}
