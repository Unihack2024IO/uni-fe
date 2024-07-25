import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SaveAndExit = () => {
    return (
        <Flex align="center" width="30">
            <Link to="/trip" width="30">
                <Button
                    width="30"
                    height="10"
                    mr="30px"
                    backgroundColor="transparent"
                    border="2px solid"
                    borderColor="gray.400"
                    borderRadius="full"
                    _hover={{ backgroundColor: "black", color: "white" }}
                >
                    Save and Exit
                </Button>
            </Link>
        </Flex>
    );
};

export default SaveAndExit;
