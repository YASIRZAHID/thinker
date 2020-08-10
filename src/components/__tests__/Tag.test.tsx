import { render, screen } from '@testing-library/react';
import { Tag } from '../Tag';

describe('Tag', () => {
    it('renders correctly', () => {
        render(<Tag />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<Tag />);
        // Add interaction tests
    });
});