import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

const TripItem = ({ item }) => {
    return (
        <Accordion>
            <AccordionItem
                width="10vw"
                height="10vh"
            >
                <Image
                    src={item.photo}
                    alt={item.Name}
                    objectFit="cover"
                    width="80%"
                    height="80%"
                />

                <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box>
                            <Heading as="h3" size="md">
                                {item.Name}
                            </Heading>
                        </Box>
                        <Box>
                            <StarIcon color="yellow.400" /> {item.rating}
                        </Box>
                        <Text fontSize="sm" color="gray.500">
                            {item.Location}
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
export default TripItem;