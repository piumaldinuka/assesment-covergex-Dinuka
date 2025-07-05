
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export type CreateTaskInput = {
  title: string;
  description: string;
}
