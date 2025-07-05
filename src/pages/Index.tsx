import { useTasks } from "@/hooks/useTasks";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const Index = () => {
  const { fetchTasks, addTask, markTaskAsDone } = useTasks();

  return (
    <div className="bg-gray-50 py-8 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container max-w-6xl mx-auto px-4">
        <div>
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              {" "}
              To Do Tasks
            </h1>
          </header>

          <div className="flex flex-col items-center mb-8">
            <TaskForm onSubmit={addTask} />
          </div>
        </div>
        <div className="border-l border-gray-300"></div> 
        <div>
          <TaskList fetchTasks={fetchTasks} onDone={markTaskAsDone} />
        </div>
      </div>
     
    </div>
  );
};

export default Index;
