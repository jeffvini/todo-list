import { SearchField } from './SearchField';
import { StatusSelect } from './StatusSelect';
import { SortButtons } from './SortButtons';

export function TaskFilters() {
  return (
    <section
      aria-labelledby="filter-title"
      className="mt-4 flex flex-col gap-4 border-b-2 border-b-slate-400 pb-7"
    >
      <h2
        id="filter-title"
        className="text-[clamp(1.6rem,4vw,1.8rem)] font-medium text-slate-800"
      >
        Filter Tasks
      </h2>
      <form className="flex flex-col gap-4">
        <SearchField />
        <div className="flex gap-6">
          <StatusSelect />
          <SortButtons />
        </div>
      </form>
    </section>
  );
}
