import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import UtilInfo from './UtilInfo';
import ScrollableContainer from '../common/ScrollBar';

// Dữ liệu mẫu
const sampleData = [
    {
        id: 1,
        name: "Khách Sạn Sunrise Đà Nẵng",
        description: "Khách Sạn Sunrise Đà Nẵng là một địa điểm nghỉ dưỡng lý tưởng tại trung tâm thành phố Đà Nẵng. Với phòng ốc sang trọng, tiện nghi hiện đại, và dịch vụ chuyên nghiệp, khách sạn mang đến cho du khách một trải nghiệm nghỉ ngơi tuyệt vời.",
        address: "123 Đường Bạch Đằng, Hải Châu, Đà Nẵng, Vietnam",
        email: "info@sunrisedanang.com",
        phone: "+84 236 1234 567",
        priceRange: "1.000.000VND-5.000.000VND",
        rating: "4.8",
        images: [
            "khach_san_sunrise1.jpg",
            "khach_san_sunrise2.jpg",
            "khach_san_sunrise3.jpg"
        ],
        openingHours: [
            { day: "Cả Tuần", time: { start: "12:00 AM", end: "12:00 AM" } },
        ],
        services: [
            "Dịch vụ phòng",
            "Bãi đỗ xe",
            "Wi-Fi miễn phí",
            "Hồ bơi",
            "Spa",
            "Nhà hàng",
            "Phòng tập gym"
        ],
        reviews: [
            "Phòng sạch sẽ và thoải mái!",
            "Dịch vụ tuyệt vời và nhân viên thân thiện.",
            "Vị trí thuận lợi, gần các điểm tham quan."
        ],
        website: "www.sunrisedanang.com",
        location: {
            latitude: "16.067789",
            longitude: "108.218914"
        }
    }
];

const utilFilter = (utilList) => {
    return utilList.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        address: item.address,
        email: item.email,
        phone: item.phone,
        priceRange: item.priceRange,
        rating: item.rating,
        images: item.images,
        openingHours: item.openingHours,
        services: item.services,
        reviews: item.reviews,
        website: item.website,
        location: item.location,
    }));
};

const UtilList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Sử dụng dữ liệu mẫu thay vì gọi API
        const fetchData = () => {
            const filteredData = utilFilter(sampleData);
            setData(filteredData);
        };
        fetchData();
    }, []);

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
            {selectedItem && <UtilInfo event={selectedItem} handleClose={handleClose} />}
        </Flex>
    );
};

export default UtilList;
