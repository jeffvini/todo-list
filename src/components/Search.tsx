export function Search() {
  return (
    <section
      aria-labelledby="search-title"
      className="mt-4 flex flex-col gap-3 border-b-2 border-b-slate-400 pb-9"
    >
      <h2
        id="search-title"
        className="text-[clamp(1.6rem,4vw,1.8rem)] font-medium text-slate-800"
      >
        Search
      </h2>
      <input
        type="text"
        placeholder="Search task..."
        aria-label="Search task"
        className="w-full rounded-md border-2 border-slate-300 bg-white px-2.5 py-1 transition-colors outline-none placeholder:text-slate-400 placeholder:italic focus:border-slate-500"
      />
    </section>
  );
}
