import React from 'react';
import TabComponent from '../components/destination/Tabs';
import Sidebar from '../components/common/Sidebar';
import { Box, Flex, Tr } from '@chakra-ui/react';
import PlanMap from '../components/tripPlanner/PlanMap';
import TripPlan from '../components/tripPlanner/TripPlan';
import Display from '../components/tripPlanner/Display';
export default function TripSuggestion() {
    return (
        <Flex>
            <Sidebar />
            <Flex direction='column' width='100%'>
                <Display parent='Trip Suggestion' m="10">Da Nang city</Display>
                <Flex width='90%'>
                    <Box width='50%'>
                        <TripPlan />
                    </Box>
                    <Box width='50%' mt="10">
                        <PlanMap plan={[{ lat: 37.7749, lng: -122.4194 }]} />
                    </Box>

                </Flex>
            </Flex>
        </Flex>

    );
}
