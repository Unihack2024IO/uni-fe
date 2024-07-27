import { Box, Heading, Text, Image, Stack, HStack, Badge, Divider } from '@chakra-ui/react';
import { MdEmail, MdPhone, MdAttachMoney } from 'react-icons/md';
import Advisor from './Advisor.jsx';

const EventInfo = ({ event }) => {
    if (!event) return null;

    return (
        <Box
            mx="auto"
        >
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
                        Entry Fee:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {event.entryFee}
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <MdEmail size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Email:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {event.contactInfo.email}
                    </Text>
                </HStack>
                <HStack spacing={2}>
                    <MdPhone size="20px" />
                    <Text fontSize="md" fontWeight="bold">
                        Phone:
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        {event.contactInfo.phone}
                    </Text>
                </HStack>
            </Stack>
            <Divider my={4} />
            <Box>
                <Heading as="h3" size="md" mb={2}>
                    Time:
                </Heading>
                <Text fontSize="md" color="gray.700">
                    {event.time}
                </Text>
            </Box>
            <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                    Activities:
                </Heading>
                <Stack spacing={2}>
                    {event.activities.map((activity, index) => (
                        <Badge key={index} colorScheme="teal">
                            {activity}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Divider my={4} />
            <Advisor event={event}/>
        </Box>
    );
};

export default EventInfo;
