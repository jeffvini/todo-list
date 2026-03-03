export interface StatusSelectProps {
  filterStatus: 'all' | 'completed' | 'pending';
  onChangeStatus: (status: 'all' | 'completed' | 'pending') => void;
}
