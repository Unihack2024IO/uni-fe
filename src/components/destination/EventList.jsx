import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import DestinationDetails from './DestinationDetails';
import EventInfo from './EventInfo';
import ScrollableContainer from '../common/ScrollBar';
import axios from 'axios';

// Event same activity

const activityFilter = (activityList) => {
    return activityList.map((item) => ({
        id: item.id,
        destinationId: item.destinationId,
        photo: item.imageUrl,
        name: item.name, // Changed Name to name to match property casing
        location: "Đà Nẵng", // Assuming location is hardcoded
        rating: 4.6 ,// Assuming rating is hardcoded
        description: item.description,
        contactInfo: item.contactInfo,
        entryFee: item.entryFee,
        imageUrl: item.imageUrl,
        activities: item.activities,
        type : item.type,
        time : item.time,
        
    }));
};

const getActivityList = async () => {
    const API = process.env.REACT_APP_HOST + "/activities";
    try {
        const response = await axios.get(API);
        return response.data.activityArray || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const EventList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const activityList = await getActivityList();
            const filteredData = activityFilter(activityList);
            setData(filteredData);
        };
        fetchData();
    }, []); // Empty dependency array to run only on mount

    const handleClose = () => {
        setSelectedItem(null);
    };
    return (
        <Flex>
            <ScrollableContainer>
                <Flex wrap="wrap" justifyContent="space-between" height="120vh">
                    {data.map((item) => (
                        <DestinationCard
                            key={item.id}
                            item={item}
                            setSelectedItem={setSelectedItem}
                        />
                    ))}
                </Flex>
            </ScrollableContainer>
            {selectedItem && <EventInfo event={selectedItem} handleClose={handleClose} />}
        </Flex>
    );
};

export default EventList;
