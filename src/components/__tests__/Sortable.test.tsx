import { render, screen } from '@testing-library/react';
import { Sortable } from '../Sortable';

describe('Sortable', () => {
    it('renders correctly', () => {
        render(<Sortable />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Sortable />);
        // Add interaction tests
    });
});