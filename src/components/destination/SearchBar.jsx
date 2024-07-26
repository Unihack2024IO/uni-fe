import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
    return (
        <InputGroup
            width="70vh"
            height="7vh"
            ml="50"
        >
            <InputLeftElement pointerEvents="none" >
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                width="70vh"
                height="100%"
                border="none"
                borderRadius="full"
                placeholder="Search for your destination..."
                variant="none"
                boxShadow="0px 5px 6px rgba(0, 0, 0, 0.1)"
                _placeholder={{ color: 'gray.500' }}
            />
        </InputGroup>
    );
};

export default SearchBar;
