import React from 'react';
import AttractionInfo from './AttractionInfo';

const Attractions = () => {
    const attraction = {
        name: "Cầu Tình Yêu",
        description: "Cầu Tình Yêu là một trong những địa điểm du lịch nổi tiếng ở Đà Nẵng, nơi du khách có thể thưởng ngoạn cảnh đẹp và tham gia nhiều hoạt động giải trí.",
        attractions: [
            "Cầu khóa tình yêu",
            "Khung cảnh sông Hàn"
        ],
        contactInfo: {
            email: "info@cautinhyeu.vn",
            touristOffice: "Văn phòng Du lịch Cầu Tình Yêu"
        },
        cuisine: [
            "Đặc sản miền Trung",
            "Hải sản"
        ],
        idealWeather: {
            averageTemperature: "25-30°C",
            condition: "Nắng đẹp",
            humidity: "60-70%",
            wind: "Nhẹ"
        },
        localCultureAndCustoms: {
            etiquette: [
                "Không làm ồn",
                "Giữ vệ sinh"
            ]
        },
        specialties: [
            "Cầu khóa tình yêu đẹp",
            "Cảnh quan sống động nhìn ra sông Hàn"
        ],
        traditionalFestivals: [
            "Lễ hội Lồng Đèn"
        ],
        location: {
            latitude: "16.0687",
            longitude: "108.2245"
        },
        popularTimes: [
            "Buổi tối",
            "18:00-21:00"
        ],
        priceRange: "Miễn phí - 100,000 VND",
        recreationalActivities: [
            "Chụp ảnh",
            "Dạo bộ"
        ],
        safetyAndSecurity: {
            advice: [
                "Tránh đám đông vào giờ cao điểm",
                "Giữ vệ sinh chung"
            ],
            measures: [
                "Camera giám sát",
                "Bảo vệ"
            ],
            status: "An toàn"
        },
        transportation: {
            convenience: "Dễ dàng",
            modes: [
                "Bus",
                "Taxi",
                "Xe máy"
            ]
        }
    };

    return (
        <AttractionInfo attraction={attraction} />
    );
};

export default Attractions;
