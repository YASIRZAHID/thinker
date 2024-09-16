import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const StyledSidebar = styled(motion.div)`
    padding: ${theme.spacing.medium};
    border-radius: ${theme.borderRadius};
    background: ${theme.colors.background};
    box-shadow: ${theme.shadows.medium};
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.3s ease-in;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.large};
    }
`;

export const Sidebar = () => {
    return (
        <StyledSidebar
            initial={ opacity: 0 }
            animate={ opacity: 1 }
            exit={ opacity: 0 }
        >
            <div className="content">
                {component} Content Here
            </div>
        </StyledSidebar>
    );
};