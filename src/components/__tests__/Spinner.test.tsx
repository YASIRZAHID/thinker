import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

describe('Spinner', () => {
    it('renders correctly', () => {
        render(<Spinner />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Spinner />);
        // Add interaction tests
    });
});