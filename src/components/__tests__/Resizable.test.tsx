import { render, screen } from '@testing-library/react';
import { Resizable } from '../Resizable';

describe('Resizable', () => {
    it('renders correctly', () => {
        render(<Resizable />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Resizable />);
        // Add interaction tests
    });
});