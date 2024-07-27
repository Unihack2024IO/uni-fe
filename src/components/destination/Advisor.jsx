import {
  Box,
  Heading,
  Text,
  Spinner,
  Flex,
  Divider,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MdWarning } from "react-icons/md";
import { AddIcon, CheckIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const getAdvice = async (id, destinationId, userId, time) => {
  const API =
    process.env.REACT_APP_HOST +
    `/adviser?userId=${userId}&destinationId=${destinationId}&activityId=${id}&time=${time}`;
  try {
    const response = await axios.get(API);
    return response.data || {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Advisor = ({ information }) => {
  const [loading, setLoading] = useState(true);
  const [advisor, setAdvisor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = (await getAdvice(
        information.id,
        information.destinationId,
        "vwAwTu5swrt6wh2dCxtC",
        "2024/07/30"
      ));

      setAdvisor(res.data);
      console.log(advisor); 
      setLoading(false);
    };
    fetchData();
  }, [information]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!advisor) {
    return <Text>Unable to load advisor information.</Text>;
  }

  return (
 
    <Box mx="auto" mt={4}>
      <Heading size="lg" marginBottom="1.5rem">
        Đánh Giá:{" "}
        {advisor.recommendation?.shouldVisit?.decision === "yes"
          ? "😍"
          : advisor.recommendation?.shouldVisit?.decision === "no"
          ? "😞"
          : "🤔"}
      </Heading>
      
 
      <Flex gap="0.5rem">
        <Heading size="sm" color="gray.700" width="80px">
          Lí do:
        </Heading>
        <Text fontSize="md" color="gray.600" mb={2}>
          {advisor.recommendation?.shouldVisit?.reasons?.pro.map((reason, index) => (
            <Text key={index} fontSize="md" color="gray.600" mb={2}>
              &#8226; {reason}
            </Text>
          ))}
          {advisor.recommendation?.shouldVisit?.reasons?.con.map((reason, index) => (
            <Text key={index} fontSize="md" color="gray.600" mb={2}>
              &#8226; {reason}
            </Text>
          ))}
        </Text>
      </Flex>
      
       <Divider my={4} />
      <Heading size="sm" marginBottom="0.5rem">
        Cần chuẩn bị:
      </Heading>
      
      <Box fontSize="md" color="gray.600" mb={4} ml="1rem">
        {advisor.preparation?.items?.map((item, index) => (
          <Text key={index} fontSize="md" color="gray.600" mb={2}>
            <AddIcon boxSize={3} mr="0.5rem" color="green.500" /> {item.item} - {item.reason}
          </Text>
        ))}
      </Box>
   
      <Divider my={4} />
      <Heading size="sm" marginBottom="0.5rem">
        Chú ý:
      </Heading>
      
      <Box fontSize="md" color="gray.600" mb={4} ml="1rem">
        {advisor.caution?.warnings?.map((warning, index) => (
          <HStack key={index} fontSize="md" color="gray.600" mb={2}>
            <Icon as={MdWarning} boxSize={4} color="red.500" />
            <Text>{warning.warning}</Text>
          </HStack>
        ))}
      </Box>
      <Divider my={4} />
      <Heading size="sm" marginBottom="0.5rem">
        Thời gian lý tưởng:
      </Heading>     
      <Text fontSize="md" color="gray.600" mb={4}>
        {advisor?.ideal_time?.time}
      </Text>
      <Divider my={4} />
      <Heading size="sm" marginBottom="0.5rem">
        Một số tips:
      </Heading>
      <Box fontSize="md" color="gray.600" mb={4} ml="1rem">
        <Heading size="sm" marginBottom="1rem">
          <TriangleDownIcon boxSize={3} /> General
        </Heading>
        {advisor.tips?.general?.map((tip, index) => (
          <HStack key={index} fontSize="md" color="gray.600" mb={3} ml={3}>
            <CheckIcon boxSize={3} color="green.500" />
            <Text>{tip.tip}</Text>
          </HStack>
        ))}
      
      
        <Heading size="sm" marginBottom="1rem">
          <TriangleDownIcon boxSize={3} /> Specific
        </Heading>
        
        {advisor.tips?.specific?.map((tip, index) => (
          <HStack key={index} fontSize="md" color="gray.600" mb={3} ml={3}>
            <CheckIcon boxSize={3} color="green.500" />
            <Text>{tip.tip}</Text>
          </HStack>
        ))}
      </Box>  
    </Box>
  );
};

export default Advisor;
