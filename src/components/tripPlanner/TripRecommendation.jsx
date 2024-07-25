import React from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const TripRecommendation = ({ number }) => {
    return (
        <Flex align="center">
            <Link to="/trip">
                <Button
                    width="30"
                    height="10"
                    mr="30px"
                    backgroundColor="transparent"
                    border="1px solid"
                    borderColor="gray.400"
                    borderRadius="full"
                    leftIcon={<ExternalLinkIcon />}
                >
                    Trip
                    <Text borderRadius="50" w="8" ml="2" p="2" backgroundColor="green.400" fontSize="sm">
                        {number}
                    </Text>
                </Button>
            </Link>

        </Flex>
    );
};

export default TripRecommendation;
