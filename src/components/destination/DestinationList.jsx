import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import DestinationCard from './DestinationCard';
import DestinationDetails from './DestinationDetails';
import danang from '../../assets/images/places/danangcity.jpg';
import hcm from '../../assets/images/places/hcmcity.jpg';
import hanoi from '../../assets/images/places/hanoicity.jpg';
import hue from '../../assets/images/places/huecity.jpg';
import hagiang from '../../assets/images/places/hagiangcity.jpg';
import ScrollableContainer from '../common/ScrollBar';
const DestinationList = () => {
    const array = [
        { id: 1, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4.7 },
        { id: 2, photo: hanoi, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4.2 },
        { id: 3, photo: hue, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4.6 },
        { id: 4, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 5, photo: hcm, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 6, photo: hanoi, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 7, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 8, photo: hagiang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 9, photo: hanoi, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4 },
        { id: 10, photo: hue, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 11, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 12, photo: hcm, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4.5 },
        { id: 13, photo: hanoi, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 5 },
        { id: 14, photo: danang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4 },
        { id: 15, photo: hagiang, Name: 'Cau ban tay', Location: 'Son tra, Da Nang', rating: 4 },
    ];

    const [selectedItem, setSelectedItem] = useState(null);

    const handleClose = () => {
        setSelectedItem(null);
    };

    return (
        <Flex>
            <ScrollableContainer>
                <Flex wrap="wrap" justifyContent="space-between" height="120vh">
                    {array.map((item) => (
                        <DestinationCard
                            key={item.id}
                            item={item}
                            setSelectedItem={setSelectedItem}
                        />
                    ))}
                </Flex>
            </ScrollableContainer>
            <DestinationDetails selectedItem={selectedItem} handleClose={handleClose} />
        </Flex >
    );
};

export default DestinationList;
