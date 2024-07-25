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
    IconButton
} from '@chakra-ui/react';
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TripItem = ({ item, onRemove }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderRadius="md" overflow="hidden">
                <AccordionButton _expanded={{ bg: 'white', color: 'black' }} p={4}>
                    <Box display="flex" alignItems="center" flex="1" textAlign="left">
                        <Image
                            src={item.photo}
                            alt={item.Name}
                            objectFit="cover"
                            borderRadius="full"
                            boxSize="50px"
                            mr={4}
                        />
                        <Box>
                            <Heading as="h3" size="md" noOfLines={1}>
                                {item.Name}
                            </Heading>
                            <Text fontSize="sm" color="gray.500">
                                {item.Location}
                            </Text>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center" mr={4}>
                        <StarIcon color="yellow.400" mr={1} /> {item.rating}
                    </Box>
                    <IconButton
                        aria-label="Remove item"
                        icon={<MdDelete />}
                        colorScheme="blackAlpha"
                        onClick={onRemove}
                    />
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} position="relative">
                    <Link to={`/destination/${item.id}`}>
                        <ExternalLinkIcon position="absolute" top={4} right={4} boxSize="6" />
                    </Link>
                    <Image
                        src={item.photo}
                        alt={item.Name}
                        objectFit="cover"
                        borderRadius="md"
                        mb={4}
                        mt={10}
                        width="100%"
                        height="200px"
                    />
                    <Text mb={4}>{item.description}</Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default TripItem;
