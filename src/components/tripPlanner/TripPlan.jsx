import { useState } from 'react';
import { Box, List, ListItem, ListIcon, Flex, Stack, Divider, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import TripItem from './TripItem';
import danang from '../../assets/images/places/danangcity.jpg';
import hcm from '../../assets/images/places/hcmcity.jpg';
import hanoi from '../../assets/images/places/hanoicity.jpg';
import hue from '../../assets/images/places/huecity.jpg';
import hagiang from '../../assets/images/places/hagiangcity.jpg';
import DividerComponent from '../common/Divider';
import ScrollableContainer from '../../components/common/ScrollBar';
import GeneralInform from '../common/GeneralInform';
const TripPlan = () => {
    const initialArray = [
        { id: 1, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4.7, description: "With broad beaches, fantastic street food, the fabled Hai Van Pass, and a growing collection of cafes, restaurants, and bars, it’s no wonder the residents of Da Nang sport some of the broadest smiles in the country. The warm sands of My Khe Beach sweep south from the mountainous Son Tra Peninsula. Da Nang hosts some of Vietnam's top luxury resorts, but much of the beach still belongs to the people who make it their playground, gym, and source of livelihood." },
        { id: 2, photo: hanoi, Name: 'Hoan Kiem Lake', Location: 'Hoan Kiem, Hanoi', rating: 4.2, description: "Hoan Kiem Lake is a central feature of Hanoi. Its history is enriched by the legend of the ancient turtle that presented Emperor Le Loi with a magical sword to drive out the invading Chinese. The lake is now a favorite spot for locals and tourists to relax and take in the scenery." },
        { id: 3, photo: hue, Name: 'Imperial City', Location: 'Hue, Thua Thien-Hue', rating: 4.6, description: "Hue's Imperial City is a vast complex of palaces, temples, walls, gates, and gardens, serving as the former imperial capital of Vietnam. It's a UNESCO World Heritage Site that offers a glimpse into the grandeur of Vietnam's feudal history." },
        { id: 4, photo: hcm, Name: 'Notre-Dame Cathedral Basilica', Location: 'District 1, Ho Chi Minh City', rating: 4.5, description: "This iconic landmark in Ho Chi Minh City was constructed between 1863 and 1880 by French colonists. It's known for its neo-Romanesque architecture and the peaceful atmosphere it provides in the midst of the bustling city." },
        { id: 5, photo: hagiang, Name: 'Ha Giang Loop', Location: 'Ha Giang Province', rating: 4.8, description: "The Ha Giang Loop is a stunning road trip through northern Vietnam's mountainous terrain. It's a popular adventure for motorbike enthusiasts and offers breathtaking views, vibrant cultures, and a sense of unspoiled beauty." }
    ];

    const [tripItems, setTripItems] = useState(initialArray);

    const removeItem = (id) => {
        setTripItems(tripItems.filter(item => item.id !== id));
    };

    return (
        <Flex direction='column' width='100%'>
            <GeneralInform />
            <ScrollableContainer >
                <Box position='relative' h="100vh">
                    <DividerComponent content='Day 1' />
                    <List spacing={5}>
                        {tripItems.map(item => (
                            <Box>
                                <ListItem key={item.id}>
                                    <Flex alignItems="center">
                                        <Box flex="1">
                                            <TripItem item={item} onRemove={() => removeItem(item.id)} />
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Stack direction='row' h='30px' p={4}>
                                    <Divider
                                        orientation='vertical'
                                        borderColor='gray.400'
                                        borderStyle='dashed'
                                        height='30px'
                                    />
                                    <Text>5 km</Text>
                                </Stack>
                            </Box>
                        ))}
                    </List>
                    <DividerComponent content='Day 2' />
                    <List spacing={5}>
                        {tripItems.map(item => (
                            <Box>
                                <ListItem key={item.id}>
                                    <Flex alignItems="center">
                                        <Box flex="1">
                                            <TripItem item={item} onRemove={() => removeItem(item.id)} />
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Stack direction='row' h='30px' p={4}>
                                    <Divider orientation='vertical' />
                                    <Text>5 km</Text>
                                </Stack>
                            </Box>
                        ))}
                    </List>
                </Box>
            </ScrollableContainer>
        </Flex>
    );
};

export default TripPlan;
