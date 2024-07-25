import React from 'react';
import TabComponent from '../components/destination/Tabs';
import Sidebar from '../components/common/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import TripRecommendation from '../components/tripPlanner/TripRecommendation';

export default function ExplorePage() {
    return (
        <Flex>
            <Sidebar />
            <Box width='100%' position="relative">
                <TripRecommendation
                    number={3}
                    position="absolute"
                    top="10%"
                    right="10%"
                />
                <TabComponent />
            </Box>
        </Flex>
    );
}
