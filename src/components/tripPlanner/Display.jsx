import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/react';

const Display = ({ parent, children }) => {
    return (
        <Heading lineHeight='tall'>
            {parent}
            <Box
                as="span"
                px="2"
                py="1"
                rounded="full"
                bg="red.100"
                fontWeight="bold"
                ml="2"
            >
                <Text as="span" color="red.600">
                    {children}
                </Text>
            </Box>
        </Heading>
    );
};

export default Display;
