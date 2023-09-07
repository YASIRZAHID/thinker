import { render, screen } from '@testing-library/react';
import { StatCard } from '../StatCard';

describe('StatCard', () => {
    it('renders correctly', () => {
        render(<StatCard />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<StatCard />);
        // Add interaction tests
    });
});