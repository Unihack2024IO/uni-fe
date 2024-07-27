import React from 'react';
import TabComponent from '../components/destination/Tabs';
import Sidebar from '../components/common/Sidebar';
import { Box, Flex, Tr } from '@chakra-ui/react';
// import PlanMap from '../components/tripPlanner/PlanMap';
import TripPlan from '../components/tripPlanner/TripPlan';
import Display from '../components/tripPlanner/Display';
import MenuComponent from '../components/common/Menu';
import Category from '../components/tripPlanner/Category';
export default function TripSuggestion() {
    return (
        <Flex direction="column">
            <Flex>
                <Sidebar />
                <Flex direction='column' width='100%' p="10">
                    <Flex justifyContent="space-between">
                        <Display parent='Trip Suggestion'>Da Nang city</Display>
                        <MenuComponent />
                    </Flex>
                    <Flex width='100%'>
                        <Box width='50%'>
                            <TripPlan />
                        </Box>
                        <Box width='50%' ml="10">
                            {/* <PlanMap /> */}
                        </Box>

                    </Flex>
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Category />
            </Flex>
        </Flex>
    );
}
