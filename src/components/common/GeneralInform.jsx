import React, { useState, useEffect } from 'react';
import {
    Flex,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Input,
    Box,
    useBreakpointValue,
    useStyleConfig
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const GeneralInform = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [buttonLabel, setButtonLabel] = useState('');

    // Update the button label with the current date
    useEffect(() => {
        const formatDate = format(selectedDate, 'yyyy/MM/dd');
        setButtonLabel(formatDate);
    }, [selectedDate]);

    const inputStyles = useStyleConfig('Input', {
        variant: 'outline',
        size: 'lg'
    });

    return (
        <Box>
            <Flex gap="1rem" alignItems="center">
                <Flex flexDirection="row" alignItems="center" gap="0.5rem">
                    <Text fontSize="3xl" fontWeight="normal" transform="scaleX(-1)">🚶‍♀️</Text>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setButtonLabel(format(date, 'yyyy/MM/dd'));
                        }}
                        dateFormat="EEEE dd MMMM"
                        customInput={
                            <Input
                                placeholder={buttonLabel || 'Select Date'}
                                size="lg"
                                variant="outline"
                                sx={inputStyles}
                                w="40"
                                border="none"
                                borderBottom="2px solid"
                                borderRadius={0}
                            />
                        }
                    />
                </Flex>
                <div>
                    <NumberInput size='md' maxW={24} defaultValue={3} min={1} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
            </Flex>
        </Box>
    );
};

export default GeneralInform;
