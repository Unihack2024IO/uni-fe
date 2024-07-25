import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Flex } from '@chakra-ui/react';
import DestinationList from './DestinationList';
import SearchBar from './SearchBar';

const TabComponent = () => {
    return (
        <Box margin='3vw' >
            <Flex justifyContent='space-between' margin='2vw 0'>
                < Text fontSize="3xl" fontWeight="bold" > Explore </Text >
                <SearchBar />
            </Flex>
            <Tabs variant='solid-rounded' colorScheme='black'>
                <TabList>
                    <Tab _selected={{ color: 'white', bg: 'black' }}>
                        Attractions
                    </Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}>
                        Events
                    </Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}>
                        Restaurants
                    </Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}>
                        Stays
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        < DestinationList />
                    </TabPanel>
                    <TabPanel>
                        < DestinationList />
                    </TabPanel>
                    <TabPanel>
                        < DestinationList />
                    </TabPanel>
                    <TabPanel>
                        < DestinationList />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default TabComponent;
