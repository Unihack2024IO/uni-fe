import React from 'react';
import TabComponent from '../components/destination/Tabs';
import Sidebar from '../components/common/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import TripRecommendation from '../components/tripPlanner/TripRecommendation';
import DateAndTime from '../components/common/DateAndTime';
export default function ExplorePage() {
    return (
        <Flex>
            <Sidebar />
            <Box width='100%' position="relative" p={4}>
                <Flex justifyContent="space-between" alignItems="center" mt={4}>
                    <Box></Box>
                    <DateAndTime date={4} time={3} />
                    <TripRecommendation
                        number={3}
                        position="absolute"
                        top="10%"
                        right="10%"
                    />
                </Flex>
                <TabComponent />
            </Box>
        </Flex>
    );
}
