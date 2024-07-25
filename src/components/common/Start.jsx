import React from "react";
import { Text, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Start = () => {
    return (
        <Box mt={8}>
            <Link to="/userpersona">
                <Button
                    fontSize="4xl"
                    color="white"
                    backgroundColor="black"
                    borderRadius="40"
                    padding={8}
                >
                    Start
                </Button>
            </Link>
            <Text fontSize="7xl" fontWeight="bold" mt={8} textAlign={"left"} color="black">
                TRAVEL <br /> DIFFERENTLY
            </Text>
        </Box>
    );
}

export default Start;
