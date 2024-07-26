import { Box, Heading, Text, Image, Stack, HStack, Badge, Divider, Flex } from '@chakra-ui/react';
import { MdEmail, MdPhone, MdAttachMoney } from 'react-icons/md';
import { AddIcon, WarningIcon, RepeatClockIcon, CheckIcon, TriangleDownIcon } from '@chakra-ui/icons';

const Advisor = ({ event }) => {
    // if (!event) return null;
    event = {
        "recommendation": {
          "shouldVisit": {
            "decision": "no",
            "reasons": {
              "pro": [],
              "con": [
                "Màn biểu diễn phun lửa và phun nước chỉ diễn ra vào Thứ Bảy và Chủ nhật, trong khi bạn muốn tham dự vào Thứ Hai.",
                "Thời tiết dự báo sẽ nhiều mây vào ngày Thứ Hai, có thể ảnh hưởng đến tầm nhìn khi xem màn biểu diễn."
              ]
            },
            "advice": "Dựa trên thông tin bạn cung cấp, bạn không nên tham dự vào ngày Thứ Hai vì màn biểu diễn không diễn ra vào ngày này. Bạn nên cân nhắc tham dự vào Thứ Bảy hoặc Chủ nhật khi thời tiết thuận lợi hơn."
          }
        },
        "preparation": {
          "items": [
            {
              "item": "Máy ảnh",
              "reason": "Để ghi lại những khoảnh khắc đẹp của màn trình diễn phun lửa và phun nước."
            },
            {
              "item": "Nước uống",
              "reason": "Để giữ nước, đặc biệt là khi trời nóng và ẩm ướt."
            },
            {
              "item": "Quần áo thoải mái",
              "reason": "Vì bạn sẽ phải di chuyển và đứng xem trong một khoảng thời gian."
            },
            {
              "item": "Thuốc dị ứng",
              "reason": "Để đề phòng trường hợp dị ứng do khói hoặc bụi."
            }
          ],
          "advice": "Nên mang theo ít đồ đạc gọn nhẹ để thuận tiện cho việc di chuyển và thưởng thức màn biểu diễn."
        },
        "caution": {
          "warnings": [
            {
              "warning": "Tránh đứng quá gần khu vực phun lửa",
              "reason": "Vì có thể gây nguy hiểm."
            },
            {
              "warning": "Cẩn thận với các thiết bị điện tử",
              "reason": "Do màn biểu diễn phun nước có thể làm ướt thiết bị."
            },
            {
              "warning": "Chú ý bảo quản tư trang",
              "reason": "Để tránh trường hợp bị mất cắp trong đám đông."
            }
          ],
          "advice": "Luôn đề cao cảnh giác, giữ khoảng cách an toàn với đám đông và tuân thủ hướng dẫn từ ban tổ chức."
        },
        "ideal_time": "Vào buổi tối Thứ Bảy hoặc Chủ nhật, khoảng 20:30 - 20:45 để có thể thoải mái lựa chọn vị trí đẹp và thưởng thức trọn vẹn màn trình diễn từ lúc bắt đầu.",
        "tips": {
          "general": [
            {
              "tip": "Tìm hiểu trước về lịch trình và địa điểm diễn ra màn biểu diễn.",
              "reason": "Để chủ động trong việc di chuyển và sắp xếp thời gian."
            },
            {
              "tip": "Đến sớm để có thể chọn được vị trí đẹp để xem.",
              "reason": "Vào thời gian diễn ra sự kiện thường rất đông đúc."
            },
            {
              "tip": "Kết hợp tham quan cầu Rồng và các địa điểm du lịch gần đó.",
              "reason": "Để tối ưu hóa thời gian và trải nghiệm của bạn."
            }
          ],
          "specific": [
            {
              "tip": "Nên đứng ở khu vực gần sông Hàn",
              "reason": "Để có thể thưởng thức trọn vẹn vẻ đẹp của màn trình diễn kết hợp với khung cảnh sông nước."
            },
            {
              "tip": "Nên chuẩn bị sẵn sàng máy ảnh hoặc điện thoại",
              "reason": "Để không bỏ lỡ những khoảnh khắc ấn tượng của màn biểu diễn phun lửa và phun nước."
            }
          ],
          "advice": "Hãy tận hưởng trọn vẹn không khí sôi động và màn trình diễn ánh sáng tuyệt đẹp của Cầu Rồng."
        }
    }
    console.log(event);
    return (
        <Box
            mx="auto"
        >  
            <Heading size='sm' marginBottom={"0.5rem"}>
                Quyết định: {event.recommendation.shouldVisit.decision}
            </Heading>
            <Flex gap="0.5rem">
                <Heading size='sm' color="gray.700">
                    Lí do:
                </Heading>
                <Text fontSize="md" color="gray.600" mb={4}>
                    {event.recommendation.shouldVisit.reasons.pro.map((reason, index) => (
                        <Text key={index} fontSize="md" color="gray.600" mb={2}>
                            &#8226; {reason}
                        </Text>
                    ))}
                    {event.recommendation.shouldVisit.reasons.con.map((reason, index) => (
                        <Text key={index} fontSize="md" color="gray.600" mb={2}>
                            &#8226; {reason}
                        </Text>
                    ))}
                </Text>
            </Flex>
            <Divider my={4} />
            <Heading size='sm' marginBottom={"0.5rem"}>
                Cần chuẩn bị: 
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4} ml={"1rem"}>
                {event.preparation.items.map((item, index) => (
                    <Text key={index} fontSize="md" color="gray.600" mb={2}>
                        <AddIcon boxSize={3} mr={"0.5rem"} /> {item.item} - {item.reason}
                    </Text>
                ))}
            </Text>
            <Divider my={4} />
            <Heading size='sm' marginBottom={"0.5rem"}>
                Chú ý:
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4} ml={"1rem"} mt={"0.5rem"}>
                {event.caution.warnings.map((warning, index) => (
                    <HStack key={index} fontSize="md" color="gray.600" mb={2}>
                        <WarningIcon boxSize={4} color="red.500" />
                        <Text>{warning.warning}</Text>
                    </HStack>
                ))}
            </Text>
            <Divider my={4} />
            <Heading size='sm' marginBottom={"0.5rem"}>
              Thời gian lý tưởng:
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
                {event.ideal_time}
            </Text>
            <Divider my={4} />
            <Heading size='sm' marginBottom={"0.5rem"}>
                Một số tips:
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4} ml={"1rem"} mt={"1rem"}>
                <Heading size='sm' marginBottom={"1rem"}>
                  <TriangleDownIcon boxSize={3} /> General
                </Heading>
                {event.tips.general.map((tip, index) => (
                    <HStack key={index} fontSize="md" color="gray.600" mb={3} ml={3}>
                        <CheckIcon boxSize={3} color="green.500" />
                        <Text>{tip.tip}</Text>
                    </HStack>
                ))}
                <Heading size='sm' marginBottom={"1rem"}>
                  <TriangleDownIcon boxSize={3} /> Specific
                </Heading>
                {event.tips.specific.map((tip, index) => (
                    <HStack key={index} fontSize="md" color="gray.600" mb={3} ml={3}>
                        <CheckIcon boxSize={3} color="green.500" />
                        <Text>{tip.tip}</Text>
                    </HStack>
                ))}
            </Text>
        </Box>
    );
};

export default Advisor;
