import React, { useState } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

const VacationInfo = () => {
    const [formData, setFormData] = useState({ location: '' });
    const array = ['Biển', 'Núi', 'Thành phố', 'Nông thôn',
        'Hiện đại', 'Thiên nhên', 'Văn hóa', 'Phổ biến',
        'Nhiều hoạt động', 'Thư giãn', 'Khám phá', 'Tiện Nghi',
        'Nhộn nhịp', 'Độc đáo', 'Đẹp', 'Tuyệt vời', 'Yên tĩnh'
    ];

    const handleButtonClick = (value) => () => {
        setFormData((prevData) => ({
            ...prevData,
            location: value
        }));
    };

    return (
        <div>
            <Text fontSize="2xl" fontWeight="500" mb="4">Điểm đến mong muốn của bạn?</Text>
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
        </div>
    );
}

export default VacationInfo;
