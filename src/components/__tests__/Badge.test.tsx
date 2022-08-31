import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
    it('renders correctly', () => {
        render(<Badge />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Badge />);
        // Add interaction tests
    });
});