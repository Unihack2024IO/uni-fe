import { Box, Heading, Text, Image, Stack, HStack, Badge, Divider,Flex, IconButton } from '@chakra-ui/react';
import { MdEmail, MdPhone, MdAttachMoney } from 'react-icons/md';
import { CloseIcon } from '@chakra-ui/icons';
import Advisor from './Advisor.jsx';
import ScrollableContainer from '../common/ScrollBar';

const EventInfo = ({ event, handleClose }) => {
    if (!event) return null;
    return (
        <Box
            flex="0 0 45%"
            p={"1.5rem"}
            mx = {"1.5rem"}
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
                src={event.photo}
                alt={event.name}
                objectFit="cover"
                borderRadius="md"
                mb={4}
                width="100%"
                height="200px"
            />
            <ScrollableContainer>
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
                    <Divider my={4} />
                    <Advisor event={event}/>
                </Box>
            </ScrollableContainer>
        </Box>
    ); 
};

export default EventInfo;
