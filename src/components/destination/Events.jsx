import React from 'react';
import EventInfo from './EventInfo';

const Events = ({item}) => {
    console.log(item);
    // Define the event data
    const event = {
        activities: [
            "Tham gia tour hướng dẫn",
            "Học hỏi kiến thức lịch sử"
        ],
        contactInfo: {
            email: "guidedtour@danang.vn",
            phone: "0236123789"
        },
        description: "Tham gia tour hướng dẫn để hiểu rõ hơn về các hiện vật và lịch sử phong phú của nền văn hóa Chăm Pa.",
        destinationId: "0oWgLgGwismafmAyvYMr",
        entryFee: "50.000 VND (bao gồm vé vào cửa)",
        imageUrl: "https://example.com/tour_huong_dan.jpg",
        name: "Tham gia tour hướng dẫn bảo tàng",
        time: "Hàng ngày, từ 09:00 đến 15:00",
        type: "Tour hướng dẫn"
    };

    return (
        <EventInfo event={item} />
    );
};

export default Events;
