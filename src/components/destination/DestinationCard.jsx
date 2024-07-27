import React from 'react';
import { Box, Stack, Text, Image, Flex, Divider } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const DestinationCard = ({ item, setSelectedItem, isSelected }) => {
    return (
        <Box
            width="19.5vw"
            height="50vh"
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
                    alt={item.name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            </Box>
            <Box mb={4} p="2">
                <Flex
                    justifyContent="space-between"
                    alignItems="top"
                >
                    <Box w="70%">
                        <Text
                            fontSize="md"
                            sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 2,
                                textOverflow: 'ellipsis',
                            }}

                        >
                            {item.name}
                        </Text>
                        <Stack direction='row' h='30px' p={4}>
                            <Divider
                                orientation='vertical'
                                borderColor='gray.400'
                                borderStyle='dashed'
                                height='30px'
                            />
                        </Stack>
                    </Box>
                    <Flex>
                        <StarIcon color="yellow.400" mr="2" /> {item.rating}
                    </Flex >
                </Flex>
                <Text fontSize="sm" color="gray.500">
                    {item.Location}
                </Text>
            </Box>
        </Box>
    );
};

export default DestinationCard;
