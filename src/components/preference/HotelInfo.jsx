import React, { useState } from 'react';
import { Flex, Text, Button, Box } from '@chakra-ui/react';
import SliderComponent from './Slider';

const HotelInfo = () => {
    const [formData, setFormData] = useState({ location: '' });
    const array = ['Khách sạn', 'Nhà nghỉ', 'Boutique Hotels', 'Resort',
        'Lều trại', 'Homestay', 'Villa', 'Căn hộ',
    ];

    const handleButtonClick = (value) => () => {
        setFormData((prevData) => ({
            ...prevData,
            location: value
        }));
    };

    return (
        <Box mr="20">
            <SliderComponent text="Ngân sách" />
            <Flex justifyContent="space-between">
                <Text fontSize="xl" fontWeight="400" mb="4">Tiết kiệm</Text>
                <Text fontSize="xl" fontWeight="400" mb="4">Xa hoa</Text>
            </Flex>
            <Text fontSize="2xl" fontWeight="500" mb="4">Nơi nghỉ ngơi phù hợp</Text>
            <Flex wrap="wrap">
                {array.map((item) => (
                    <Button
                        key={item}
                        borderRadius="full"
                        m='1vw'
                        onClick={handleButtonClick(item)}
                        isActive={formData.location === item}
                    >
                        {item}
                    </Button>
                ))}
            </Flex>
        </Box>
    );
}

export default HotelInfo;
