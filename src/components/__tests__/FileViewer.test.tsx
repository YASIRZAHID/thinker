import { render, screen } from '@testing-library/react';
import { FileViewer } from '../FileViewer';

describe('FileViewer', () => {
    it('renders correctly', () => {
        render(<FileViewer />);
        expect(screen.getByRole('region')).toBeInTheDocument();
    });
    
    it('handles user interactions', () => {
        render(<FileViewer />);
        // Add interaction tests
    });
});