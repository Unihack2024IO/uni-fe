import React from 'react';
import { Box, Button, ButtonGroup, Flex, Input, Text } from '@chakra-ui/react';

const BasicInfo = ({ formData, updateFormData }) => {
    const handleInputChange = (field) => (e) => {
        updateFormData(field, e.target.value);
    };

    const handleButtonClick = (field, value) => () => {
        updateFormData(field, value);
    };

    return (
        <>
            <Flex justifyContent="space-between">
                <Flex alignItems="left" direction="column">
                    <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 1vw 1vw'>Name</Text>
                    <Input
                        size="lg"
                        width='100%'
                        borderRadius="full"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                    />
                </Flex>
                <Flex alignItems="left" direction="column" mr="20">
                    <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 1vw 1vw'>Location</Text>
                    <Input
                        size="lg"
                        width='100%'
                        borderRadius="full"
                        value={formData.location}
                        onChange={handleInputChange('location')}
                    />
                </Flex>
            </Flex>
            <Flex justifyContent="space-between">
                <Flex alignItems="left" direction="column">
                    <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 1vw 1vw'>Age</Text>
                    <Input
                        size="lg"
                        width='70%'
                        borderRadius="full"
                        value={formData.age}
                        onChange={handleInputChange('age')}
                        placeholder='How many years'
                    />
                </Flex>
                <Flex alignItems="left" mr="10" direction="column">
                    <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 1vw 1vw'>Gender</Text>
                    <ButtonGroup variant="outline" spacing="6">
                        <Button
                            borderRadius="full"
                            onClick={handleButtonClick('gender', 'Male')}
                            isActive={formData.gender === 'Male'}
                        >
                            Male
                        </Button>
                        <Button
                            borderRadius="full"
                            onClick={handleButtonClick('gender', 'Female')}
                            isActive={formData.gender === 'Female'}
                        >
                            Female
                        </Button>
                        <Button
                            borderRadius="full"
                            onClick={handleButtonClick('gender', 'Other')}
                            isActive={formData.gender === 'Other'}
                        >
                            Other
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
            <Box>
                <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 2vw 0'>Who would you like to travel with?</Text>
                <ButtonGroup variant="outline" spacing="6">
                    <Button
                        borderRadius="full"
                        onClick={handleButtonClick('travelCompanion', 'Solo')}
                        isActive={formData.travelCompanion === 'Solo'}
                    >
                        Solo
                    </Button>
                    <Button
                        borderRadius="full"
                        onClick={handleButtonClick('travelCompanion', 'Spouse')}
                        isActive={formData.travelCompanion === 'Spouse'}
                    >
                        Spouse
                    </Button>
                    <Button
                        borderRadius="full"
                        onClick={handleButtonClick('travelCompanion', 'Family')}
                        isActive={formData.travelCompanion === 'Family'}
                    >
                        Family
                    </Button>
                    <Button
                        borderRadius="full"
                        onClick={handleButtonClick('travelCompanion', 'Friends')}
                        isActive={formData.travelCompanion === 'Friends'}
                    >
                        Friends
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    );
}

export default BasicInfo;
