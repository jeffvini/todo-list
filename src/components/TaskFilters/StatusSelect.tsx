import type { StatusSelectProps } from '../../interfaces/StatusSelectProps';

export function StatusSelect({
  filterStatus,
  onChangeStatus,
}: StatusSelectProps) {
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === 'all' || value === 'completed' || value === 'pending') {
      onChangeStatus(value);
    }
  };
  return (
    <div className="flex flex-1 flex-col gap-3">
      <label
        htmlFor="filter-status"
        className="cursor-pointer text-xs font-bold tracking-wider text-slate-700 uppercase"
      >
        Status
      </label>
      <select
        name="status"
        value={filterStatus}
        onChange={handleChangeStatus}
        id="filter-status"
        aria-controls="task-list"
        className="h-9 cursor-pointer rounded-md border-2 border-slate-300 bg-white px-1.5 text-sm transition-colors outline-none focus:border-slate-500"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
