import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('calls onSubmit with title and description when form is submitted', () => {
  const mockOnSubmit = jest.fn();

  render(<TaskForm onSubmit={mockOnSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: 'Test Title' }
  });
  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: 'Test Description' }
  });

  fireEvent.submit(screen.getByRole('form'));

  expect(mockOnSubmit).toHaveBeenCalledWith({
    title: 'Test Title',
    description: 'Test Description'
  });
});
