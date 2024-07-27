import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Flex } from '@chakra-ui/react';
// import DestinationList from './DestinationList';
import AttractionList from './AttractionList';
import EventList from './EventList';
import UtilList from './UtilList';
import SearchBar from './SearchBar';

const TabComponent = () => {
    return (
        <Box margin='0 2vw' >

            < Text fontSize="3xl" fontWeight="bold" > Explore </Text >

            <Tabs variant='solid-rounded' colorScheme='black'>
                <Flex justifyContent='left' margin='2vw 0'>
                    <TabList gap={"1rem"}>
                        <Tab _selected={{ color: 'white', bg: 'black', p: "0rem 2rem" }}>
                            Attractions
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'black', p: "0rem 2rem" }}>
                            Events
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'black', p: "0rem 2rem" }}>
                            Utilities
                        </Tab>
                    </TabList>
                    <SearchBar />
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <AttractionList />
                    </TabPanel>
                    <TabPanel>
                        <EventList />
                    </TabPanel>
                    <TabPanel>
                        <UtilList />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    );
}

export default TabComponent;
