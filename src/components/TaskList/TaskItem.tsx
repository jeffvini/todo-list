interface TaskItemProps {
  title: string;
  category: string;
}

export function TaskItem({ title, category }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between gap-5 rounded-md bg-white px-4 py-6 shadow-[0_0_7px_4px_rgb(0,0,0,0.1)]">
      <label className="flex flex-1 cursor-pointer items-center gap-5">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer transition-transform active:scale-95"
        />
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-lg text-slate-800">{title}</p>
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            ({category})
          </span>
        </div>
      </label>
      <button
        type="button"
        aria-label="Delete task"
        className="h-8 w-8 cursor-pointer rounded-lg pb-1 text-center text-2xl leading-none font-bold text-red-400 transition-all hover:bg-red-400 hover:text-slate-100 active:scale-95"
      >
        &times;
      </button>
    </li>
  );
}
