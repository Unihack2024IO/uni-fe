import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const Title = ({ text }) => {
    return (
        <Flex align="left">
            <Text fontSize="4xl" fontWeight="bold">
                {text}
            </Text>
        </Flex>
    );
};

export default Title;
