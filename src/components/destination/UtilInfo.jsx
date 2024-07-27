import { Box, Heading, Text, Image, Stack, HStack, Divider, Link as ChakraLink, Link, Button, IconButton, Icon, Flex } from '@chakra-ui/react';
import { MdEmail, MdPhone, MdAttachMoney } from 'react-icons/md';
import { CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Advisor from './Advisor.jsx';
import ScrollableContainer from '../common/ScrollBar';
import { FaParking, FaWifi, FaSwimmingPool, FaSpa, FaUtensils, FaDumbbell, FaConciergeBell } from 'react-icons/fa';

const getServiceIcon = (service) => {
    switch (service) {
        case 'Dịch vụ phòng':
            return { icon: FaConciergeBell, color: 'blue.500' };
        case 'Bãi đỗ xe':
            return { icon: FaParking, color: 'orange.500' };
        case 'Wi-Fi miễn phí':
            return { icon: FaWifi, color: 'teal.500' };
        case 'Hồ bơi':
            return { icon: FaSwimmingPool, color: 'cyan.500' };
        case 'Spa':
            return { icon: FaSpa, color: 'purple.500' };
        case 'Nhà hàng':
            return { icon: FaUtensils, color: 'green.500' };
        case 'Phòng tập gym':
            return { icon: FaDumbbell, color: 'red.500' };
        default:
            return { icon: null, color: 'gray.500' };
    }
};
const UtilInfo = ({ event, handleClose }) => {
    if (!event) return null;

    return (
        <Box
            flex="0 0 45%"
            p={"1.5rem"}
            mx={"1.5rem"}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            position="relative"
            bg="white"
            overflow="auto"
            height="120vh"
        >
            <IconButton
                icon={<CloseIcon />}
                aria-label="Close"
                position="absolute"
                top={2}
                right={2}
                onClick={handleClose}
                opacity={0.8}
            />
            <Image
                src={event.images[0]}
                alt={event.name}
                objectFit="cover"
                borderRadius="md"
                mb={4}
                width="100%"
                height="200px"
            />
            <ScrollableContainer>
                <Box mx="auto">
                    <Heading as="h2" size="lg" mb={3}>
                        {event.name}
                    </Heading>
                    <Text fontSize="md" color="gray.600" mb={4}>
                        {event.description}
                    </Text>
                    <Divider my={4} />
                    <Stack spacing={3}>
                        <HStack spacing={2}>
                            <MdAttachMoney size="20px" />
                            <Text fontSize="md" fontWeight="bold">
                                Price Range:
                            </Text>
                            <Text fontSize="md" color="gray.700">
                                {event.priceRange}
                            </Text>
                        </HStack>
                        <HStack spacing={2}>
                            <MdEmail size="20px" />
                            <Text fontSize="md" fontWeight="bold">
                                Email:
                            </Text>
                            <Text fontSize="md" color="gray.700">
                                {event.email}
                            </Text>
                        </HStack>
                        <HStack spacing={2}>
                            <MdPhone size="20px" />
                            <Text fontSize="md" fontWeight="bold">
                                Phone:
                            </Text>
                            <Text fontSize="md" color="gray.700">
                                {event.phone}
                            </Text>
                        </HStack>
                        <HStack spacing={2}>
                            <Flex width="80%" justifyContent="space-between" alignItems="center">
                                <Flex>
                                    <MdAttachMoney size="20px" />
                                    <Text fontSize="md" fontWeight="bold">
                                        Rating:
                                    </Text>
                                    <Text fontSize="md" color="gray.700">
                                        {event.rating}
                                    </Text>
                                </Flex>
                                <ChakraLink as={Link} to={`/destination/${event.id}`}>
                                    <Button colorScheme="teal" mt={4} rightIcon={<ExternalLinkIcon />}>
                                        Book
                                    </Button>
                                </ChakraLink>
                            </Flex>
                        </HStack>
                    </Stack>
                    <Divider my={4} />
                    <Box>
                        <Heading as="h3" size="md" mb={2}>
                            Address:
                        </Heading>
                        <Text fontSize="md" color="gray.700">
                            {event.address}
                        </Text>
                    </Box>
                    <Divider my={4} />
                    <Box>
                        <Heading as="h3" size="md" mb={2}>
                            Opening Hours:
                        </Heading>
                        {event.openingHours.map((hours, index) => (
                            <Box key={index} mb={2}>
                                <Text fontSize="md" fontWeight="bold">
                                    {hours.day}:
                                </Text>
                                <Text fontSize="md" color="gray.700">
                                    {hours.time.start} - {hours.time.end}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                    <Divider my={4} />
                    <Box>
                        <Heading as="h3" size="md" mb={2}>
                            Services:
                        </Heading>
                        <Stack spacing={1}>
                            {event.services.map((service, index) => {
                                const { icon, color } = getServiceIcon(service);
                                return (
                                    <Box key={index} display="flex" alignItems="center">
                                        {icon && <Icon as={icon} color={color} />}
                                        <Text fontSize="md" color="gray.700" ml={2}>
                                            {service}
                                        </Text>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </Box>
                    <Divider my={4} />
                    <Box>
                        <Heading as="h3" size="md" mb={2}>
                            Reviews:
                        </Heading>
                        <Stack spacing={1}>
                            {event.reviews.map((review, index) => (
                                < Text key={index} fontSize="md" color="gray.700" >
                                    {review}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                    <Divider my={4} />

                </Box>
            </ScrollableContainer >
        </Box >
    );
};

export default UtilInfo;
