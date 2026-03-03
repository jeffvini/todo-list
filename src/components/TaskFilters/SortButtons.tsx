import type { SortButtonsProps } from '../../interfaces/SortButtonsProps';

export function SortButtons({ sortOrder, onChangeSort }: SortButtonsProps) {
  const handleChangeSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValue = e.currentTarget.value;

    if (newValue === 'asc' || newValue === 'desc') {
      onChangeSort(newValue);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-3">
      <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
        Sort
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          value="asc"
          onClick={handleChangeSort}
          aria-pressed={sortOrder === 'asc'}
          aria-label="Sort tasks by name in ascending order"
          aria-controls="task-list"
          className={`h-9 flex-1 cursor-pointer rounded-md border-2 px-3 ${sortOrder === 'asc' ? 'border-slate-700 bg-slate-700 text-white' : 'border-transparent bg-slate-200 hover:border-slate-400 hover:text-slate-700'} text-xs font-bold whitespace-nowrap text-slate-500 transition-all active:scale-95`}
        >
          A-Z
        </button>
        <button
          type="button"
          value="desc"
          onClick={handleChangeSort}
          aria-pressed={sortOrder === 'desc'}
          aria-label="Sort tasks by name in descending order"
          aria-controls="task-list"
          className={`h-9 flex-1 cursor-pointer rounded-md border-2 px-3 ${sortOrder === 'desc' ? 'border-slate-700 bg-slate-700 text-white' : 'border-transparent bg-slate-200 hover:border-slate-400 hover:text-slate-700'} text-xs font-bold whitespace-nowrap text-slate-500 transition-all active:scale-95`}
        >
          Z-A
        </button>
      </div>
    </div>
  );
}
