import React, { useEffect, useState } from "react";

import AttractionInfo from "./AttractionInfo";

import axios from "axios";

import { Box, Spinner } from "@chakra-ui/react";

// Function to get response from API

const getRes = async (destinationId) => {
  const API = `${process.env.REACT_APP_HOST}/response/destinations/${destinationId}`;

  try {
    const response = await axios.get(API);

    return response.data.destination || {};
  } catch (error) {
    console.error(error);

    return {};
  }
};

// Main component

const Attractions = ({ item }) => {
  const [attraction, setAttraction] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(item);

      const res = await getRes(item.destinationId);

      setAttraction(res);

      setLoading(false);
    };

    fetchData();
  }, [item]);

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

  console.log(attraction);

  return <AttractionInfo attraction={attraction} />;
};

export default Attractions;
