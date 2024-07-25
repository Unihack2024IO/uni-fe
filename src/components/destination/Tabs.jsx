import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Flex } from '@chakra-ui/react';
import DestinationList from './DestinationList';
import SearchBar from './SearchBar';

const TabComponent = () => {
    return (
        <Box margin='0 2vw' >

            < Text fontSize="3xl" fontWeight="bold" > Explore </Text >

            <Tabs variant='solid-rounded' colorScheme='black'>
                <Flex justifyContent='left' margin='2vw 0'>
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
                    <SearchBar />
                </Flex>
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
        </Box >
    );
}

export default TabComponent;
