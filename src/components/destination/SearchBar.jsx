import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
    return (
        <InputGroup
            width="70vh"
            height="7vh"
            mr="30"
        >
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                width="70vh"
                height="100%"
                borderRadius="full"
                placeholder="Search for your destination..."
                variant="outline"
                borderColor="gray.400"
                boxShadow="md"
                _placeholder={{ color: 'gray.500' }}
            />
        </InputGroup>
    );
};

export default SearchBar;
