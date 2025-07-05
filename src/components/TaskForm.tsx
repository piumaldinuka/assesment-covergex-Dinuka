import { Card, Button, Input } from "antd";

const AddTaskForm = ({ onSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    if (!title || !description) return;
    e.target.reset();
    onSubmit({ title, description });
  

  };

  return (
    <Card
      size="small"
      title="Add New Task"
      className="w-full max-w-lg mx-auto animate-fade-in"
    >
      <form onSubmit={handleSubmit} className="space-y-4 transition-colors">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <Input
            id="title"
            name="title"
            placeholder="Enter task title"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
            <span className="text-red-500">*</span>
          </label>
          <Input.TextArea
            id="description"
            name="description"
            required
            placeholder="Enter task description"
            className="w-full min-h-[100px]"
          />
        </div>

        <Button
          className="flex-16 bg-todo-blue hover:bg-blue-600 ml-48 transition-colors"
          htmlType="submit"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AddTaskForm;
