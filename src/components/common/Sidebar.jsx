import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Flex,
    Box,
    Avatar,
    Text
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import {
    AddIcon,
    ArrowBackIcon,
    ArrowForwardIcon,
    BellIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CloseIcon,
    EditIcon,
    EmailIcon,
    HamburgerIcon,
    InfoIcon,
    SearchIcon,
} from "@chakra-ui/icons";
function IconOnlyButton({ onClick, icon }) {
    return (
        <IconButton
            aria-label="Icon button"
            icon={icon}
            onClick={onClick}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
            fontSize={24}
            m={3}
            color={"blackAlpha.800"}
        />
    );
}
function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = React.useState('left');

    return (
        <Flex
            borderRight="1px solid"
            borderColor="gray.200"
            height="100vh"
            position="sticky"
            top="0"
            bottom="0"
            left="0"
            flexDirection={"column"}
            justifyContent="space-between"
        
        >
            <Box display="flex" flexDirection="column">
                <IconOnlyButton onClick={onOpen} icon={<ArrowForwardIcon />} />
                <IconOnlyButton icon={<BellIcon />} />
                <IconOnlyButton icon={<AddIcon />} />
                <IconOnlyButton icon={<InfoIcon />} />
                <IconOnlyButton icon={<EmailIcon />} />
                <IconOnlyButton icon={<SearchIcon />} />
            </Box>
            <Box display="flex" flexDirection="column" mx={"auto"} mb={4}>
                <Avatar w="30px" h="auto" mx="auto" bg={"blackAlpha.700"}/>
                <Text size="md" fontWeight={"500"}>Guest</Text>
            </Box>

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <Flex justify="space-between">
                        <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                        <IconOnlyButton onClick={onClose} icon={<ArrowBackIcon />} />
                    </Flex>

                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Sidebar;
