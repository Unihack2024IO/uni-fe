import React, { useState, useEffect } from 'react';
import {
    Input,
    Box,
    useBreakpointValue,
    useStyleConfig
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DateAndTime = () => {
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
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                    setButtonLabel(format(date, 'yyyy/MM/dd'));
                }}
                dateFormat="yyyy/MM/dd"
                customInput={
                    <Input
                        placeholder={buttonLabel || 'Select Date'}
                        size="lg"
                        variant="outline"
                        sx={inputStyles}
                        w="40"
                        border="none"
                        borderBottom={`2px solid`}
                        borderRadius={0}
                    />
                }
            />
        </Box>
    );
};

export default DateAndTime;
