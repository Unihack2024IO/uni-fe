import {
  Box,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const getSuggestion = async (userId, destinationId) => {
  const API =
    process.env.REACT_APP_HOST +
    `/adviser/suggestions?userId=${userId}&destinationId=${destinationId}`;
  try {
    const response = await axios.get(API);
    return response.data || {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Suggester = ({ information }) => {
  const [loading, setLoading] = useState(true);
  const [htmlString, setHtmlString] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getSuggestion(
        "vwAwTu5swrt6wh2dCxtC",
        information.destinationId
      );
      setHtmlString(res.data);
      setLoading(false);
    };
    fetchData();
  }, [information]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!htmlString) {
    return <Text>There'r No thing here</Text>;
  }

  return (
    <>
      <Box dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export default Suggester;
