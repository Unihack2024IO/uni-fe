import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import theme from "../../theme";
const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer>
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>

);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text color={theme.config.mainColor} display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    const SignUpHandle = () => {
    }
    const SignInHandle = () => {
    }

    return (
        <Box
            width="100%"
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                align="center"
                justify={"space-between"}
                direction={"row"}

            >
                <Stack
                    align="center" justify="center" spacing={4} direction={"row"}
                >
                    <HamburgerIcon w={8} h={8} color={theme.config.mainColor} />
                    <AboutUs />
                </Stack>
                <MenuItem to="/name" fontSize="3xl" fontWeight="bold" p={2}>
                    Explore Now
                </MenuItem>
                <Stack
                    align="center" justify="center" spacing={4} direction={"row"}
                >
                    <SignUp onClick={() => SignUpHandle()} />
                    <SignIn onClick={() => SignInHandle()} />
                </Stack>
            </Stack>
        </Box >
    );
};
const AboutUs = () => {
    return (<MenuItem to="/aboutus"> About us </MenuItem>);
}
const SignUp = () => {
    return (<MenuItem to="/signup"> Sign up </MenuItem>);
}
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
            <MenuItem to="/signin"> Sign in </MenuItem>
        </Box >

    );
}
const Navbar = ({ children, ...props }) => {
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
