import { Box, Heading, Text, Image, Flex, IconButton, HStack } from '@chakra-ui/react';
import { CloseIcon, StarIcon } from '@chakra-ui/icons';
import { createIcon } from '@chakra-ui/react';

const StarHalfIcon = createIcon({
    displayName: 'StarHalfIcon',
    path: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 17.27l5.18 3.73-1.45-6.03L22 9.24l-6.18-.54L12 2 8.18 8.7 2 9.24l4.27 5.73L4.82 21z" />
            <path d="M12 17.27l-3.18-2.32L8 12l-4.27-.37L12 5.5V17.27z" fill="currentColor" />
        </svg>
    ),
});

const DestinationDetails = ({ selectedItem, handleClose }) => {
    if (!selectedItem) return null;

    // Function to render star ratings, handling fractional stars
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
            ml={20}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            position="relative"
        >
            <IconButton
                icon={<CloseIcon />}
                aria-label="Close"
                position="absolute"
                top={2}
                right={2}
                onClick={handleClose}
            />
            <Heading as="h4" size="lg" mb={2}>
                {selectedItem.Name}
            </Heading>
            <Image
                src={selectedItem.photo}
                alt={selectedItem.Name}
                objectFit="cover"
                width="100%"
                height="200px"
                mb={4}
            />
            <Text fontSize="lg" mb={2}>
                Location: {selectedItem.Location}
            </Text>
            <Text fontSize="lg">
                Rating: {renderStars(selectedItem.rating)}
            </Text>
        </Box>
    );
};
export default DestinationDetails;
