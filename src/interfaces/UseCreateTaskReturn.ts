export interface UseCreateTaskReturn {
  title: string;
  category: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClearInput: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
