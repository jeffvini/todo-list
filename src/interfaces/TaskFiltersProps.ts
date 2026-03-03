export interface TaskFiltersProps {
  search: string;
  filterStatus: 'all' | 'completed' | 'pending';
  sortOrder: 'asc' | 'desc';
  onChangeSearch: (value: string) => void;
  onChangeStatus: (status: 'all' | 'completed' | 'pending') => void;
  onChangeSort: (sort: 'asc' | 'desc') => void;
}
