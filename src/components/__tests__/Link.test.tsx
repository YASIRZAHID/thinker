import { render, screen } from '@testing-library/react';
import { Link } from '../Link';

describe('Link', () => {
    it('renders correctly', () => {
        render(<Link />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Link />);
        // Add interaction tests
    });
});