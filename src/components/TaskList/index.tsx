import { TaskItem } from './TaskItem';

export function TaskList() {
  return (
    <section aria-labelledby="my-tasks-title" className="mt-7">
      <h2 id="my-tasks-title" className="sr-only">
        My Tasks
      </h2>
      <ul id="task-list" aria-live="polite" className="flex flex-col gap-4">
        <TaskItem title="Finish React hooks deep dive" category="Studies" />
        <TaskItem title="Prepare weekly sprint report" category="Work" />
        <TaskItem title="Schedule dentist appointment" category="Personal" />
      </ul>
    </section>
  );
}
