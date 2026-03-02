import type { TaskListProps } from '../../interfaces/TaskListProps';

import { TaskItem } from './TaskItem';

export function TaskList({ tasks }: TaskListProps) {
  return (
    <section aria-labelledby="my-tasks-title" className="mt-7">
      <h2 id="my-tasks-title" className="sr-only">
        My Tasks
      </h2>
      <ul id="task-list" aria-live="polite" className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} category={task.category} />
        ))}
      </ul>
    </section>
  );
}
