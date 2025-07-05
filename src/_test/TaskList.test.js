import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList' ;

const mockTasks = [
  { id: 1, title: 'Task 1', description: 'Test 1' },
  { id: 2, title: 'Task 2', description: 'Test 2' },
];

test('renders tasks and handles done click', () => {
  const onDoneMock = jest.fn();
  render(<TaskList fetchTasks={jest.fn()} onDone={onDoneMock} tasks={mockTasks} />);

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();

  const buttons = screen.getAllByRole('button', { name: 'Done' });
  fireEvent.click(buttons[0]);

  expect(onDoneMock).toHaveBeenCalledWith(1);
});
