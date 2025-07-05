import React from "react";
import { Card, Button, Checkbox } from "antd";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onMarkDone: (id: string) => void;
}

const TaskCard = ({ task, onMarkDone }: TaskCardProps) => {
  return (
    <Card
      size="small"
      className="task-card w-full animate-fade-in"
      style={{ backgroundColor: "#f5f5f5" }}
      title={task.title}
    >
      <div className="w-full max-w-lg mx-auto flex items-start gap-4">
        <div className="text-sm text-gray-600 whitespace-pre-wrap flex-1">
          {task.description || (
        <span className="text-muted-foreground italic">No description</span>
          )}
        </div>
        <Button
          className="bg-todo-blue hover:bg-blue-600 transition-colors"
          type="primary"
          htmlType="button"
          onClick={() => onMarkDone(task.id)}
        >
          Done
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
