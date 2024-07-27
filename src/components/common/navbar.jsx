import React, { useState } from "react";
import {
  Link as RouterLink,
  Box,
  Flex,
  Text,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import theme from "../../theme";
import { signIn } from "../../helpers/oauth";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Nav>
      <MenuLinks />
    </Nav>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <RouterLink to={to}>
      <Text
        color={theme.config.mainColor}
        display="block"
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        _active={{ textDecoration: "none" }}
        {...rest}
      >
        {children}
      </Text>
    </RouterLink>
  );
};

const MenuLinks = () => {
  return (
    <Box width="100%" flexBasis={{ base: "100%", md: "auto" }}>
      <Stack align="center" justify={"space-between"} direction={"row"}>
        <Stack align="center" justify="center" spacing={4} direction={"row"}>
          <HamburgerIcon w={8} h={8} color={theme.config.mainColor} />
          <AboutUs />
        </Stack>
        <MenuItem to="/name" fontSize="3xl" fontWeight="bold" p={2}>
          Explore Now
        </MenuItem>
        <Stack align="center" justify="center" spacing={4} direction={"row"}>
          <SignUp />
          <SignIn />
        </Stack>
      </Stack>
    </Box>
  );
};

const AboutUs = () => {
  return <MenuItem to="/aboutus">About us</MenuItem>;
};

const SignUp = () => {
  return <MenuItem to="/signup">Sign up</MenuItem>;
};

const signInClick = () => {
  signIn();
};

const SignIn = () => {
  return (
    <Box
      padding="0.3rem 1.5rem"
      display={{ base: "block", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      border={"solid 1px"}
      borderRadius="20"
      color={theme.config.mainColor}
    >
      <MenuItem>
        <MenuItem onClick={signInClick}>Sign In</MenuItem>
      </MenuItem>
    </Box>
  );
};

const Nav = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={"transparent"}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navbar;
