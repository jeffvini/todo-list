import { TaskItem } from './TaskItem';

export function TaskList() {
  return (
    <ul
      id="task-list"
      aria-label="Task list"
      aria-live="polite"
      className="mt-7 flex flex-col gap-4 border-b-2 border-b-slate-400 pb-7"
    >
      <TaskItem title="Finish React hooks deep dive" category="Studies" />
      <TaskItem title="Prepare weekly sprint report" category="Work" />
      <TaskItem title="Schedule dentist appointment" category="Personal" />
    </ul>
  );
}
