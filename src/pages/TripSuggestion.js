import React from 'react';
import TabComponent from '../components/destination/Tabs';
import Sidebar from '../components/common/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import PlanMap from '../components/tripPlanner/PlanMap';
import TripPlan from '../components/tripPlanner/TripPlan';
export default function TripSuggestion() {
    return (
        <Flex>
            <Sidebar />
            <Flex width='90%'>
                <Box width='50%'>
                    <TabComponent />
                </Box>
                <Box width='50%'>


                </Box>

            </Flex>

        </Flex>
    );
}
