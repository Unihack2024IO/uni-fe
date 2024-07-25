import { Box } from '@chakra-ui/react';

const ScrollableContainer = ({ children }) => {
    return (
        <Box
            flex="1"  // Takes up the available space
            overflowY="auto" // Enable vertical scrolling
            overflowX="hidden" // Prevent horizontal scroll
            pr="4"
            sx={{
                '::-webkit-scrollbar': {
                    width: '8px',
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            }}
        >
            {children}
        </Box>
    );
};

export default ScrollableContainer;
