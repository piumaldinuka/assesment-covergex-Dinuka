import { Card, Button, Input, Form } from "antd";

const AddTaskForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Card
      size="small"
      title="Add New Task"
      className="w-full max-w-lg mx-auto animate-fade-in"
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        className="space-y-4 transition-colors"
        layout="vertical"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input placeholder="Enter task title" className="w-full" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea
            placeholder="Enter task description"
            className="w-full min-h-[100px]"
          />
        </Form.Item>

        <Button
          className="flex-16 bg-todo-blue hover:bg-blue-600 ml-48 transition-colors"
          htmlType="submit"
          type="primary"
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AddTaskForm;
