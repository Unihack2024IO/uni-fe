import {Tabs, TabList, TabPanels, Tab, TabPanel, Image,
    Text, Box, Flex, Heading, Stack, HStack, Badge, Divider, IconButton } from '@chakra-ui/react';

import { MdLocationOn, MdEmail, MdPhone, MdAttachMoney } from 'react-icons/md';
import { CloseIcon } from '@chakra-ui/icons';
import ScrollableContainer from '../common/ScrollBar';
import Advisor from './Advisor.jsx';


const  AttractionInfo = ({ attraction, handleClose }) => {
    if (!attraction) return null;
    console.log(attraction)
    return (
        <Box
            flex="0 0 45%"
            p={"1.5rem 1.5rem 1.5rem 2rem"}
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
            />
            <Heading as="h3" size="lg" mb={3}>
                {attraction.name}
            </Heading>
            <Image
                src={attraction.photo}
                alt={attraction.name}
                objectFit="cover"
                borderRadius="md"
                mb={4}
                width="100%"
                height="200px"
            />
            <ScrollableContainer>
            <Box mt="4">
            {attraction.description && (
                <Text fontSize="md" color="gray.600" mb={4}>
                    {attraction.description}
                </Text>
            )}



            <Divider my={4} />

            <Stack spacing={3}>

                {attraction.location && (

                    <HStack spacing={2}>

                        <MdLocationOn size="20px" />

                        <Text fontSize="md" fontWeight="bold">

                            Location:

                        </Text>

                        <Text fontSize="md" color="gray.700">

                            {/* Latitude: {attraction.destination.location.latitude}, Longitude: {attraction.destination.location.longitude} */}
                            {attraction.destination.location.address}


                        </Text>

                    </HStack>

                )}

                {attraction.contactInfo && (

                    <>

                        {attraction.contactInfo.email && (

                            <HStack spacing={2}>

                                <MdEmail size="20px" />

                                <Text fontSize="md" fontWeight="bold">

                                    Email:

                                </Text>

                                <Text fontSize="md" color="gray.700">

                                    {attraction.contactInfo.email}

                                </Text>

                            </HStack>

                        )}



                        {attraction.contactInfo.touristOffice && (

                            <HStack spacing={2}>

                                <MdPhone size="20px" />

                                <Text fontSize="md" fontWeight="bold">

                                    Tourist Office:

                                </Text>

                                <Text fontSize="md" color="gray.700">

                                    {attraction.contactInfo.touristOffice}

                                </Text>

                            </HStack>

                        )}

                    </>

                )}

                {attraction.destination.priceRange && (

                    <HStack spacing={2}>

                        <MdAttachMoney size="20px" />

                        <Text fontSize="md" fontWeight="bold">

                            Price Range:

                        </Text>

                        <Text fontSize="md" color="gray.700">

                            {attraction.destination.priceRange}

                        </Text>

                    </HStack>

                )}

            </Stack>

            {attraction.destination.idealWeather && (

                <>

                    <Divider my={4} />

                    <Box>

                        <Heading as="h3" size="md" mb={2}>

                            Ideal Weather:

                        </Heading>

                        <Text fontSize="md" color="gray.700">

                            Temperature: {attraction.destination.idealWeather.averageTemperature}

                        </Text>

                        <Text fontSize="md" color="gray.700">

                            Condition: {attraction.destination.idealWeather.condition}

                        </Text>

                        <Text fontSize="md" color="gray.700">

                            Humidity: {attraction.destination.idealWeather.humidity}

                        </Text>

                        <Text fontSize="md" color="gray.700">

                            Wind: {attraction.destination.idealWeather.wind}

                        </Text>

                    </Box>

                </>

            )}

            {attraction.activities && attraction.activities.length > 0 && (

                <>

                    <Divider my={4} />

                    <Box mt={4}>

                        <Heading as="h3" size="md" mb={2}>

                            Activities:

                        </Heading>

                        <Stack spacing={2}>

                            {attraction.activities.map((activity, index) => (

                                <Badge key={index} colorScheme="teal">

                                    {activity}

                                </Badge>

                            ))}

                        </Stack>

                    </Box>

                </>

            )}

            {attraction.destination.cuisine && attraction.destination.cuisine.length > 0 && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Local Cuisine:

                    </Heading>

                    <Stack spacing={2}>

                        {attraction.destination.cuisine.map((dish, index) => (

                            <Badge key={index} colorScheme="teal">

                                {dish}

                            </Badge>

                        ))}

                    </Stack>

                </Box>

            )}

            {attraction.destination.specialties && attraction.destination.specialties.length > 0 && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Specialties:

                    </Heading>

                    <Stack spacing={2}>

                        {attraction.destination.specialties.map((specialty, index) => (

                            <Badge key={index} colorScheme="teal">

                                {specialty}

                            </Badge>

                        ))}

                    </Stack>

                </Box>

            )}

            {/* {attraction.destination.recreationalActivities && attraction.destination.recreationalActivities.length > 0 && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Văn hóa

                    </Heading>

                    <Stack spacing={2}>

                        {attraction.destination.recreationalActivities.map((activity, index) => (

                            <Badge key={index} colorScheme="teal">

                                {activity}

                            </Badge>

                        ))}

                    </Stack>

                </Box>

            )} */}


            {/* {attraction.destination.traditionalFestivals && attraction.destination.traditionalFestivals.length > 0 && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Traditional Festivals:

                    </Heading>

                    <Stack spacing={2}>

                        {attraction.destination.traditionalFestivals.map((festival, index) => (

                            <Badge key={index} colorScheme="teal">

                                {festival}

                            </Badge>

                        ))}

                    </Stack>

                </Box>

            )} */}

            {/* {attraction.safetyAndSecurity && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Safety and Security:

                    </Heading>

                    {attraction.safetyAndSecurity.advice && attraction.safetyAndSecurity.advice.length > 0 && (

                        <>

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

                        </>

                    )}

                    {attraction.safetyAndSecurity.measures && attraction.safetyAndSecurity.measures.length > 0 && (

                        <>

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

                        </>

                    )}

                    {attraction.safetyAndSecurity.status && (

                        <Text fontSize="md" color="gray.700" mt={2}>

                            Status: {attraction.safetyAndSecurity.status}

                        </Text>

                    )}

                </Box>

            )} */}

            {attraction.destination.transportation && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Transportation:

                    </Heading>

                    {attraction.destination.transportation.convenience && (

                        <Text fontSize="md" color="gray.700">

                            Convenience: {attraction.destination.transportation.convenience}

                        </Text>

                    )}

                    {attraction.destination.transportation.modes && attraction.destination.transportation.modes.length > 0 && (

                        <Stack spacing={2} mt={2}>
                            <Text>
                                Phương tiện: 
                                {attraction.destination.transportation.modes.join(",")}
                            </Text>
                        </Stack>

                    )}

                </Box>

            )}

            {attraction.destination.popularTimes && attraction.destination.popularTimes.length > 0 && (

                <Box mt={4}>

                    <Heading as="h3" size="md" mb={2}>

                        Popular Times:

                    </Heading>

                    <Stack spacing={2}>

                        {attraction.destination.popularTimes.map((time, index) => (

                            <Badge key={index} colorScheme="teal">

                                {time}

                            </Badge>

                        ))}

                    </Stack>

                </Box>
            )}
            <Divider my={4} />
            <Tabs variant='unstyled'>
                <Flex justifyContent='left' margin='2vw 0'>
                    <TabList gap={"1rem"}>
                        <Tab _selected={{fontWeight: "500", borderBottom:"3px solid #000", p: "0rem 2rem" }}>
                            Lời khuyên
                        </Tab>
                        <Tab _selected={{fontWeight: "500", borderBottom:"3px solid #000", p: "0rem 2rem" }}>
                            Bạn có thể thích
                        </Tab>
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel padding={0}>
                        < Advisor />
                    </TabPanel>
                    <TabPanel>
                        Hahah
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
            </ScrollableContainer>
        </Box> 
    );
};

export default AttractionInfo;