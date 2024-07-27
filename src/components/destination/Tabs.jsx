import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Flex } from '@chakra-ui/react';
import DestinationList from './DestinationList';
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
                            Stops
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'black', p: "0rem 2rem" }}>
                            Restaurants
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'black', p: "0rem 2rem" }}>
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
                        {/* <Stops */}
                        {/* < DestinationList /> */}
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
