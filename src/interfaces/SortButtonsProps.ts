export interface SortButtonsProps {
  sortOrder: 'asc' | 'desc';
  onChangeSort: (sort: 'asc' | 'desc') => void;
}
