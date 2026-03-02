import type { TaskListProps } from '../../interfaces/TaskListProps';

import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onToggleDone }: TaskListProps) {
  return (
    <section aria-labelledby="my-tasks-title" className="mt-7">
      <h2 id="my-tasks-title" className="sr-only">
        My Tasks
      </h2>
      <ul id="task-list" aria-live="polite" className="flex flex-col gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggleDone={onToggleDone} />
          ))
        ) : (
          <p className="text-center text-[clamp(1.6rem,5vw,2rem)] font-medium text-slate-500">
            No tasks found.
          </p>
        )}
      </ul>
    </section>
  );
}
