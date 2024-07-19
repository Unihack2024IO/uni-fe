import { Box, Heading, Text, Image, Flex, IconButton, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { CloseIcon, StarIcon, } from '@chakra-ui/icons';
import danang from '../../assets/images/danangcity.jpg';
import hcm from '../../assets/images/hcmcity.jpg';
import hanoi from '../../assets/images/hanoicity.jpg';
import hue from '../../assets/images/huecity.jpg';
import hagiang from '../../assets/images/hagiangcity.jpg';

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

const ContentDisplay = () => {
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
    const array = [
        {
            id: 1,
            photo: danang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4.7,
        },
        {
            id: 2,
            photo: hanoi,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4.2,
        },
        {
            id: 3,
            photo: hue,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4.6,
        },
        {
            id: 4,
            photo: danang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 5,
            photo: hcm,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 6,
            photo: hanoi,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 7,
            photo: danang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 8,
            photo: hagiang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 9,
            photo: hanoi,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4,
        },
        {
            id: 10,
            photo: hue,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 11,
            photo: danang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 12,
            photo: hcm,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4.5,
        },
        {
            id: 13,
            photo: hanoi,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 5,
        },
        {
            id: 14,
            photo: danang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4,
        },
        {
            id: 15,
            photo: hagiang,
            Name: 'Cau ban tay',
            Location: 'Son tra, Da Nang',
            rating: 4,
        },
    ];

    const [selectedItem, setSelectedItem] = useState(null);
    const handleClose = () => {
        setSelectedItem(null);
    };
    return (
        <Flex>
            <Flex wrap="wrap" justifyContent="space-between" gap={4}>
                {array.map((item) => (
                    <Box
                        key={item.id}
                        width="35vh"
                        height="40vh"
                        cursor="pointer"
                        onClick={() => setSelectedItem(item)}
                    >
                        <Box
                            borderRadius="10"
                            overflow="hidden"
                            height="80%"
                        >
                            <Image
                                src={item.photo}
                                alt={item.Name}
                                objectFit="fill"
                                width="100%"
                                height="100%"
                            />
                        </Box>
                        <Box
                        >
                            <Flex
                                p={2}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box mb={4}>
                                    <Heading as="h3" size="md">
                                        {item.Name}
                                    </Heading>
                                    <Text fontSize="sm" color="gray.500">
                                        {item.Location}
                                    </Text>
                                </Box>
                                <Box>
                                    {renderStars(item.rating)}
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </Flex>
            <Box
                flex={selectedItem ? '0 0 35%' : '0 0 0'}
                ml={4}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                transition="flex 0.3s ease" // Smooth transition
                display={selectedItem ? "block" : "none"}
                position="relative"
            >
                {selectedItem && (
                    <>
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
                            Rating:{renderStars(selectedItem.rating)}
                        </Text>
                    </>
                )}
            </Box>
        </Flex>
    );
};
const popupInfo = (id) => {
    return (
        <Box>
            <Text>{id}</Text>
        </Box>
    );
};
export default ContentDisplay;
