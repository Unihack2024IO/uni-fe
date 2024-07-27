import React, { useState } from 'react';
import { Box, List, ListItem, Flex, Stack, Divider, Text } from '@chakra-ui/react';
import Stop from './Stop';
import Activity from './Activity';
import DividerComponent from '../common/Divider';
import ScrollableContainer from '../../components/common/ScrollBar';
import GeneralInform from '../common/GeneralInform';

const TripPlan = () => {
    const initialArray = [
        {
            "id": 6,
            "type": "stop",
            "name": "Khách Sạn Mường Thanh Luxury",
            "time": "Day 1",
            "duration": "15:00 - Day 3: 11:00",
            "activity": "Nhận phòng tại khách sạn",
            "reason": "Khách sạn sang trọng với dịch vụ hàng đầu và vị trí trung tâm gần các điểm tham quan nổi tiếng.",
            "imageUrl": "muong_thanh_luxury.jpg",
            "priceRange": "2.000.000VND-6.000.000VND"
        },
        {
            "id": 7,
            "type": "activity",
            "name": "Tham quan phố cổ Hội An",
            "time": "Day 1",
            "duration": "09:00-18:00",
            "activity": "Tham quan",
            "reason": "Khám phá nét đẹp cổ kính và văn hóa đa dạng của phố cổ Hội An, một di sản văn hóa thế giới.",
            "imageUrl": "https://example.com/pho_co_hoi_an.jpg",
            "priceRange": "50.000VND-200.000VND"
        },
        {
            "id": 8,
            "type": "stop",
            "name": "Vinpearl Resort & Spa Nha Trang",
            "time": "Day 1",
            "duration": "15:00 - Day 7: 11:00",
            "activity": "Nhận phòng tại khách sạn",
            "reason": "Khu nghỉ dưỡng sang trọng với bãi biển riêng và các tiện nghi cao cấp, lý tưởng cho kỳ nghỉ dưỡng.",
            "imageUrl": "vinpearl_nha_trang.jpg",
            "priceRange": "3.000.000VND-8.000.000VND"
        },
        {
            "id": 9,
            "type": "stop",
            "name": "Pullman Vũng Tàu",
            "time": "Day 1",
            "duration": "14:00 - Day 9: 11:00",
            "activity": "Nhận phòng tại khách sạn",
            "reason": "Khách sạn hiện đại với tầm nhìn ra biển, dịch vụ tuyệt vời và vị trí thuận tiện.",
            "imageUrl": "pullman_vung_tau.jpg",
            "priceRange": "2.500.000VND-7.000.000VND"
        },
        {
            "id": 10,
            "type": "stop",
            "name": "Fusion Resort Phú Quốc",
            "time": "Day 1",
            "duration": "15:00 - Day 13: 11:00",
            "activity": "Nhận phòng tại khu nghỉ dưỡng",
            "reason": "Khu nghỉ dưỡng cao cấp với các biệt thự ven biển và dịch vụ spa miễn phí.",
            "imageUrl": "fusion_phu_quoc.jpg",
            "priceRange": "4.000.000VND-10.000.000VND"
        },
        {
            "id": 11,
            "type": "activity",
            "name": "Khám phá hang Sơn Đoòng",
            "time": "Day 2",
            "duration": "08:00-17:00",
            "activity": "Thám hiểm",
            "reason": "Hang động lớn nhất thế giới với hệ thống đá vôi kỳ vĩ và hệ sinh thái độc đáo.",
            "imageUrl": "https://example.com/hang_son_doong.jpg",
            "priceRange": "3.000.000VND-5.000.000VND"
        },
        {
            "id": 12,
            "type": "activity",
            "name": "Chèo thuyền trên sông Thu Bồn",
            "time": "Day 2",
            "duration": "10:00-12:00",
            "activity": "Chèo thuyền",
            "reason": "Trải nghiệm chèo thuyền ngắm cảnh đẹp dọc sông Thu Bồn và thăm các làng nghề truyền thống.",
            "imageUrl": "https://example.com/song_thu_bon.jpg",
            "priceRange": "200.000VND-500.000VND"
        },
        {
            "id": 13,
            "type": "activity",
            "name": "Thưởng thức ẩm thực đường phố Sài Gòn",
            "time": "Day 2",
            "duration": "18:00-21:00",
            "activity": "Thưởng thức ẩm thực",
            "reason": "Khám phá văn hóa ẩm thực phong phú và đa dạng của Sài Gòn qua các món ăn đường phố.",
            "imageUrl": "https://example.com/am_thuc_sai_gon.jpg",
            "priceRange": "100.000VND-300.000VND"
        }
    ];

    const [tripItems, setTripItems] = useState(initialArray);

    const removeItem = (id) => {
        setTripItems(tripItems.filter(item => item.id !== id));
    };

    const groupByDay = (items) => {
        return items.reduce((acc, item) => {
            const day = item.time.split(':')[0].trim();
            if (!acc[day]) acc[day] = [];
            acc[day].push(item);
            return acc;
        }, {});
    };

    const groupedItems = groupByDay(tripItems);

    return (
        <Flex direction='column' width='100%'>
            <GeneralInform />
            <ScrollableContainer>
                <Box position='relative' h="100vh">
                    {Object.keys(groupedItems).map(day => (
                        <Box key={day}>
                            <DividerComponent content={day} />
                            <List spacing={5}>
                                {groupedItems[day].map(item => (
                                    <Box key={item.id}>
                                        <ListItem>
                                            <Flex alignItems="center">
                                                <Box flex="1">
                                                    {item.type === "stop" ? (
                                                        <Stop stop={item} onRemove={() => removeItem(item.id)} />
                                                    ) : (
                                                        <Activity activity={item} onRemove={() => removeItem(item.id)} />
                                                    )}
                                                </Box>
                                            </Flex>
                                        </ListItem>
                                        <Stack direction='row' h='30px' p={4}>
                                            <Divider
                                                orientation='vertical'
                                                borderColor='gray.400'
                                                borderStyle='dashed'
                                                height='30px'
                                            />
                                            <Text>5 km</Text>
                                        </Stack>
                                    </Box>
                                ))}
                            </List>
                        </Box>
                    ))}
                </Box>
            </ScrollableContainer>
        </Flex>
    );
};

export default TripPlan;
