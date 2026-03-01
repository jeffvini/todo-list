import { useState, useRef } from 'react';

import type { CreateTaskProps } from '../interfaces/CreateTaskProps';

import { X } from 'lucide-react';

export function CreateTask({ onSubmit }: CreateTaskProps) {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClearInput = () => {
    setTitle('');
    inputRef.current?.focus();
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() !== '' && category !== '') {
      onSubmit(title.trim(), category);

      setTitle('');
      setCategory('');

      inputRef.current?.focus();
    }
  };

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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex h-9 w-full items-center gap-2 rounded-md border-2 border-slate-300 bg-white pr-1 pl-2.5 transition-colors focus-within:border-slate-500">
          <input
            type="text"
            ref={inputRef}
            value={title}
            onChange={handleChangeTitle}
            required
            placeholder="Enter the title..."
            aria-label="Enter the task title"
            className="flex-1 outline-none placeholder:text-slate-400 placeholder:italic"
          />
          {title.trim() !== '' && (
            <button
              type="button"
              onClick={handleClearInput}
              aria-label="Clear task title"
              className="cursor-pointer rounded-full p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
        <select
          required
          value={category}
          onChange={handleChangeCategory}
          aria-label="Task category"
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
          type="submit"
          aria-controls="task-list"
          className="w-full cursor-pointer rounded-lg bg-indigo-700 px-4 py-3 font-medium text-white transition-all hover:bg-indigo-800 active:scale-[0.98] md:w-fit md:self-start"
        >
          Create Task
        </button>
      </form>
    </section>
  );
}
