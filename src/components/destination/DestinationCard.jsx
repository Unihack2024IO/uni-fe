import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const DestinationCard = ({ item, setSelectedItem, isSelected }) => {
    return (
        <Box
            width="43vh"
            height="60vh"
            cursor="pointer"
            onClick={() => setSelectedItem(isSelected ? null : item)}
        >
            <Box
                borderRadius="20"
                overflow="hidden"
                height="80%"
            >
                <Image
                    src={item.photo}
                    alt={item.Name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            </Box>
            <Box mb={4} p={4}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Heading as="h3" size="md">
                            {item.Name}
                        </Heading>
                    </Box>
                    <Box>
                        <StarIcon color="yellow.400" /> {item.rating}
                    </Box>
                </Flex>
                <Text fontSize="sm" color="gray.500">
                    {item.Location}
                </Text>
            </Box>
        </Box>
    );
};

export default DestinationCard;
