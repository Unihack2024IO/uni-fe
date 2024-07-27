import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    Heading,
    Text,
    IconButton,
    Button,
    Link as ChakraLink
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Stop = ({ stop, onRemove }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderRadius="md" overflow="hidden" boxShadow="md">
                <AccordionButton _expanded={{ bg: 'gray.100', color: 'black' }} p={4}>
                    <Box display="flex" alignItems="center" mr={4}>
                        <MdCheckCircle color="green" size="20px" mr="5" />
                    </Box>
                    <Box display="flex" alignItems="center" flex="1" textAlign="left">
                        <Image
                            src={stop.imageUrl}
                            alt={stop.name}
                            objectFit="cover"
                            borderRadius="10"
                            boxSize="70px"
                            mr={4}
                        />
                        <Box>
                            <Heading as="h3" size="md" noOfLines={1}>
                                {stop.name}
                            </Heading>
                            <Text fontSize="sm" color="gray.500">
                                {stop.location}
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                {stop.duration}
                            </Text>
                        </Box>
                    </Box>
                    <IconButton
                        aria-label="Remove stop"
                        icon={<MdDelete boxSize={5} />}
                        colorScheme="red"
                        variant="outline"
                        onClick={onRemove}
                        border="none"
                        size="3xl"
                        mr="4"
                    />

                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} position="relative">
                    <Image
                        src={stop.imageUrl}
                        alt={stop.name}
                        objectFit="cover"
                        borderRadius="md"
                        mb={4}
                        mt={10}
                        width="100%"
                        height="200px"
                    />
                    <Text mb={4}>{stop.activity}</Text>
                    <Text mb={4}>{stop.reason}</Text>
                    <Text mb={4} fontWeight="bold">{stop.priceRange}</Text>
                    <ChakraLink as={Link} to={`/destination/${stop.id}`}>
                        <Button colorScheme="teal" mt={4} rightIcon={<ExternalLinkIcon />}>Book</Button>
                    </ChakraLink>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Stop;
