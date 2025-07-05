import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import message from "antd/es/message";

const TaskList = ({ fetchTasks, onDone }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if(tasks.length === 0){
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data.filter((task: { status: string; }) => task.status === "pending").slice(0, 5));
      } catch (error) {
        message.error("Error fetching tasks");
        console.error("Error fetching tasks:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTasks();
  }

  }, [tasks, fetchTasks]);


  const handleSubmit = async (e) => {
    await onDone(e);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== e));
    setIsLoading(false);
    await fetchTasks();
  };

  if (isLoading) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg animate-fade-in">
        <p className="text-gray-500">Loading tasks...</p>
      </div>
    );
  }
  if (!tasks) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg animate-fade-in">
        <p className="text-gray-500">No tasks available.</p>
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg animate-fade-in">
        <p className="text-gray-500">No tasks available.</p>
      </div>
    );
  }
  if (tasks?.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg animate-fade-in">
        <p className="text-gray-500">No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 w-full">
      {tasks?.map((task, index) => (
        <div
          key={task.id}
          className="task-appear"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <TaskCard task={task} onMarkDone={handleSubmit} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
