import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box } from '@chakra-ui/react';
import ContentDisplay from '../Explore/ContentDisplay';
const TabsComponent = () => {
    return (
        <Box margin='3vw' >
            < Text fontSize="3xl" fontWeight="bold" margin='2vw 0' > Explore </Text >
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
                        <ContentDisplay />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default TabsComponent;
