import { CreateTask } from './components/CreateTask';
import { TaskFilters } from './components/TaskFilters';

function App() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center px-4 py-6">
      <div className="w-full max-w-2xl rounded-xl bg-slate-100 p-6 shadow-[0_0_20px_4px_rgba(30,41,59,0.15)]">
        <h1 className="text-center text-[clamp(2.2rem,5vw,2.8rem)] font-semibold tracking-tight text-slate-800">
          To-do List
        </h1>
        <CreateTask />
        <TaskFilters />
      </div>
    </main>
  );
}

export default App;
