import { Box, Heading, Text, Image, Flex, IconButton, HStack } from '@chakra-ui/react';
import { CloseIcon, StarIcon } from '@chakra-ui/icons';
import StarHalfIcon from '../common/StarHalfIcon';
import ScrollableContainer from '../common/ScrollBar';
import Events from './Events';
import Attractions from './Attractions';

const DestinationDetails = ({ selectedItem, handleClose }) => {
    if (!selectedItem) return null;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <HStack spacing={1}>
                {[...Array(fullStars)].map((_, index) => (
                    <StarIcon key={`full-${index}`} color="yellow.400" />
                ))}
                {hasHalfStar && <StarHalfIcon color="yellow.400" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <StarIcon key={`empty-${index}`} color="gray.300" />
                ))}
            </HStack>
        );
    };

    return (
        <Box
            flex="0 0 45%"
            p={4}
            ml="10"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            position="relative"
            bg="white"
            overflow="hidden"
            height="120vh"
        >
            <IconButton
                icon={<CloseIcon />}
                aria-label="Close"
                position="absolute"
                top={2}
                right={2}
                onClick={handleClose}
            />
            <Heading as="h3" size="lg" mb={3}>
                {selectedItem.name}
            </Heading>
            <Image
                src={selectedItem.photo}
                alt={selectedItem.name}
                objectFit="cover"
                borderRadius="md"
                mb={4}
                width="100%"
                height="200px"
            />
            <ScrollableContainer>
                <Events item={selectedItem}/>
                <Attractions item={selectedItem} />
            </ScrollableContainer>
        </Box>
    );
};

export default DestinationDetails;
