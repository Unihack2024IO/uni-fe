import { Box, Heading, Text, Stack, HStack, Badge, Divider } from '@chakra-ui/react';
import { MdLocationOn, MdEmail, MdPhone, MdRestaurantMenu } from 'react-icons/md';

const AttractionInfo = ({ attraction }) => {
    if (!attraction) return null;

    return (
        <Box mt="4">
            <Heading as="h2" size="lg" mb={3}>
                {attraction.name}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
                {attraction.description}
            </Text>
            <Divider my={4} />
            <Stack spacing={3}>
                <HStack spacing={2}>
                    <MdLocationOn size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Location:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        Latitude: {attraction.location.latitude}, Longitude: {attraction.location.longitude}
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <MdEmail size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Email:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {attraction.contactInfo.email}
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <MdPhone size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Tourist Office:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {attraction.contactInfo.touristOffice}
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <MdRestaurantMenu size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Price Range:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {attraction.priceRange}
                    </Text>
                </HStack>
            </Stack>
            <Divider my={4} />
            <Box>
                <Heading as="h3" size="md" mb={2}>
                    Ideal Weather:
                </Heading>
                <Text fontSize="md" color="gray.700">
                    Temperature: {attraction.idealWeather.averageTemperature}
                </Text>
                <Text fontSize="md" color="gray.700">
                    Condition: {attraction.idealWeather.condition}
                </Text>
                <Text fontSize="md" color="gray.700">
                    Humidity: {attraction.idealWeather.humidity}
                </Text>
                <Text fontSize="md" color="gray.700">
                    Wind: {attraction.idealWeather.wind}
                </Text>
            </Box>
            <Divider my={4} />
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Attractions:
                </Heading>
                <Stack spacing={2}>
                    {attraction.attractions.map((attraction, index) => (
                        <Badge key={index} colorScheme="teal">
                            {attraction}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Local Cuisine:
                </Heading>
                <Stack spacing={2}>
                    {attraction.cuisine.map((dish, index) => (
                        <Badge key={index} colorScheme="teal">
                            {dish}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Specialties:
                </Heading>
                <Stack spacing={2}>
                    {attraction.specialties.map((specialty, index) => (
                        <Badge key={index} colorScheme="teal">
                            {specialty}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Activities:
                </Heading>
                <Stack spacing={2}>
                    {attraction.recreationalActivities.map((activity, index) => (
                        <Badge key={index} colorScheme="teal">
                            {activity}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Etiquette:
                </Heading>
                <Stack spacing={2}>
                    {attraction.localCultureAndCustoms.etiquette.map((rule, index) => (
                        <Badge key={index} colorScheme="teal">
                            {rule}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Traditional Festivals:
                </Heading>
                <Stack spacing={2}>
                    {attraction.traditionalFestivals.map((festival, index) => (
                        <Badge key={index} colorScheme="teal">
                            {festival}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Safety and Security:
                </Heading>
                <Text fontSize="md" color="gray.700">
                    Advice:
                </Text>
                <Stack spacing={2} mb={4}>
                    {attraction.safetyAndSecurity.advice.map((tip, index) => (
                        <Text key={index} fontSize="md" color="gray.700">
                            - {tip}
                        </Text>
                    ))}
                </Stack>
                <Text fontSize="md" color="gray.700">
                    Measures:
                </Text>
                <Stack spacing={2}>
                    {attraction.safetyAndSecurity.measures.map((measure, index) => (
                        <Text key={index} fontSize="md" color="gray.700">
                            - {measure}
                        </Text>
                    ))}
                </Stack>
                <Text fontSize="md" color="gray.700" mt={2}>
                    Status: {attraction.safetyAndSecurity.status}
                </Text>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Transportation:
                </Heading>
                <Text fontSize="md" color="gray.700">
                    Convenience: {attraction.transportation.convenience}
                </Text>
                <Stack spacing={2} mt={2}>
                    {attraction.transportation.modes.map((mode, index) => (
                        <Badge key={index} colorScheme="teal">
                            {mode}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Popular Times:
                </Heading>
                <Stack spacing={2}>
                    {attraction.popularTimes.map((time, index) => (
                        <Badge key={index} colorScheme="teal">
                            {time}
                        </Badge>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default AttractionInfo;
