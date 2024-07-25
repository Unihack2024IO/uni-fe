import React, { useState } from 'react';
import { Flex, Text, Button, Box } from '@chakra-ui/react';
import SliderComponent from './Slider';

const EatingInfo = () => {
    const [formData, setFormData] = useState({ location: '' });
    const array = ['Ngon', 'Dở', 'Độc lạ', 'No',
        'Đói', 'Sang', 'Vỉa hè', 'Quán cóc', 'Nhà hàng',
    ];

    const handleButtonClick = (value) => () => {
        setFormData((prevData) => ({
            ...prevData,
            location: value
        }));
    };

    return (
        <Box mr="20">
            <SliderComponent text="Trải nghiệm ẩm thực địa phương" />
            <Flex justifyContent="space-between">
                <Text fontSize="xl" fontWeight="400" mb="4">Độc lạ</Text>
                <Text fontSize="xl" fontWeight="400" mb="4">Phổ biến</Text>
            </Flex>
            <Text fontSize="2xl" fontWeight="500" mb="4">Dịch vụ ăn uống yêu thích</Text>
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

export default EatingInfo;
