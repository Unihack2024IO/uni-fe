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
    Link as ChakraLink,
    Badge,
    Stack,
} from '@chakra-ui/react';
import { DragHandleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { MdDelete, MdLocationOn, MdAccessTime, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Activity = ({ activity, onRemove }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderRadius="md" overflow="hidden" boxShadow="md" mb={4}>
                <AccordionButton _expanded={{ bg: 'gray.50' }} p={4}>
                    <Box display="flex" alignItems="center" mr={4}>
                        <DragHandleIcon style={{ color: 'orange', marginRight: '5px', fontSize: '20px' }} />
                    </Box>
                    <Box display="flex" alignItems="center" flex="1" textAlign="left">
                        <MotionBox
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Image
                                src={activity.imageUrl}
                                alt={activity.name}
                                objectFit="cover"
                                borderRadius="10"
                                boxSize="70px"
                                mr={4}
                            />
                        </MotionBox>
                        <Box>
                            <Heading as="h3" size="md" noOfLines={1}>
                                {activity.name} <Badge colorScheme="green" ml="1">{activity.time}</Badge>
                            </Heading>
                            <Stack direction="row" align="center" fontSize="sm" color="gray.500">
                                <MdLocationOn /><Text>{activity.location}</Text>
                            </Stack>
                            <Stack direction="row" align="center" fontSize="sm" color="gray.500">
                                <MdAccessTime /><Text>{activity.duration}</Text>
                            </Stack>
                        </Box>
                    </Box>
                    <IconButton
                        aria-label="Remove activity"
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
                    <ChakraLink as={Link} to={`/destination/${activity.id}`} position="absolute" top={4} right={4}>
                        <ExternalLinkIcon boxSize="6" />
                    </ChakraLink>
                    <Image
                        src={activity.imageUrl}
                        alt={activity.name}
                        objectFit="cover"
                        borderRadius="md"
                        mb={4}
                        mt={10}
                        width="100%"
                        height="200px"
                    />
                    <Stack spacing={3}>
                        <Text fontWeight="bold">{activity.activity}</Text>
                        <Text>{activity.reason}</Text>
                        <Stack direction="row" align="center" fontSize="sm" color="gray.500">
                            <MdStar /><Text>{activity.priceRange}</Text>
                        </Stack>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Activity;
