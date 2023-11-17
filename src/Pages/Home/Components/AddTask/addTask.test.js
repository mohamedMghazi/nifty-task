import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import AddTask from './index';

jest.mock('axios');

describe('AddTask Component', () => {
    test('renders AddTask component', () => {
        render(<AddTask />);

        // Ensure that the component renders without any errors
        expect(screen.getByPlaceholderText(/I plan to do something nifty today!/i)).toBeInTheDocument();
        expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
    });

    test('successfully adds a task', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve());

        render(<AddTask />);

        fireEvent.change(screen.getByPlaceholderText(/I plan to do something nifty today!/i), {
            target: { value: 'Test Task' },
        });

        fireEvent.submit(screen.getByTestId('add-task-form'));
    });
});
