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
    Link as ChakraLink,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CalendarIcon } from '@chakra-ui/icons';
import { MdDelete, MdCheckCircle, MdLocationOn, MdAccessTime, MdAttachMoney, MdOutlineDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Stop = ({ stop, onRemove }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderRadius="md" overflow="hidden" boxShadow="md" mb={4}>
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
                            <HStack fontSize="sm" color="gray.500" spacing={2}>
                                <MdLocationOn />
                                <Text>{stop.location}</Text>
                            </HStack>
                            <HStack fontSize="sm" color="gray.500" spacing={2}>
                                <MdAccessTime />
                                <Text>{stop.duration}</Text>
                            </HStack>
                        </Box>
                    </Box>
                    <IconButton
                        aria-label="Remove stop"
                        icon={<MdDelete />}
                        colorScheme="red"
                        variant="outline"
                        onClick={onRemove}
                        border="none"
                        size="md"
                        mr={4}
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
                    <VStack align="start" spacing={3}>
                        <HStack align="center" fontSize="sm" color="gray.500">
                            <MdOutlineDescription /><Text>{stop.activity}</Text>
                        </HStack>
                        <HStack align="center" fontSize="sm" color="gray.500">
                            <CalendarIcon /><Text>{stop.reason}</Text>
                        </HStack>
                        <HStack fontSize="sm" color="gray.500" spacing={2}>
                            <MdAttachMoney />
                            <Text fontWeight="bold">{stop.priceRange}</Text>
                        </HStack>
                    </VStack>
                    <ChakraLink as={Link} to={`/destination/${stop.id}`}>
                        <Button colorScheme="teal" mt={4} rightIcon={<ExternalLinkIcon />}>Book</Button>
                    </ChakraLink>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Stop;
