import { useState, useRef } from 'react';

import type { UseCreateTaskReturn } from '../interfaces/UseCreateTaskReturn';

export function useCreateTask(
  onSubmit: (title: string, category: string) => void,
): UseCreateTaskReturn {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleClearInput = () => {
    setTitle('');
    inputRef.current?.focus();
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

  return {
    title,
    category,
    inputRef,
    handleChangeTitle,
    handleChangeCategory,
    handleClearInput,
    handleSubmit,
  };
}
