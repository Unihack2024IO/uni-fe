import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import AttractionInfo from './AttractionInfo';
import ScrollableContainer from '../common/ScrollBar';
import axios from 'axios';

const attractionFilter = (attractionList) => {
    return attractionList.map((item) => ({
        id: item.id,
        destinationId: item.destinationId,
        photo: item.imageUrl,
        name: item.name, // Changed Name to name to match property casing
        location: "Đà Nẵng", // Assuming location is hardcoded
        rating: 4.6, // Assuming rating is hardcoded
        description: item.description,
        contactInfo: item.contactInfo,
        entryFee: item.entryFee,
        activities: item.activities,
        type: item.type,
        time: item.time,
        destination: item.destination,
    }));
};

const getAttractionList = async () => {
    const API = process.env.REACT_APP_HOST + "/activities";
    try {
        const response = await axios.get(API);
        return response.data.activityArray || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const AttractionList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const attractionList = await getAttractionList();
            const filteredData = attractionFilter(attractionList);
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
            {selectedItem && (
                <AttractionInfo
                    attraction={selectedItem}
                    handleClose={handleClose}
                />
            )}
        </Flex>
    );
};

export default AttractionList;