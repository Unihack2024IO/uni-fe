import React from 'react';
import { Flex, Progress, VStack } from '@chakra-ui/react';
import Title from "./Title";

const Stepper = ({ currentStep, steps, currentStepComponent }) => {
    const progressPercent = ((currentStep + 1) / steps.length) * 100;

    return (
        <VStack spacing={4} align="start" justify="space-between">
            <Flex direction="column" w="100%">
                <VStack align="start">
                    <Title text={steps[currentStep].title} />
                </VStack>

                <Flex direction="column" w="100%" mb="10">
                    {currentStepComponent}
                </Flex>

                <Progress
                    value={progressPercent}
                    size="sm"
                    width="80%"
                    backgroundColor="black.100"
                    color="black"
                    borderRadius='full'
                    position="absolute"
                    bottom="15%"
                    sx={{
                        '& > div:first-of-type': {
                            backgroundColor: 'black.100',
                        },
                        '& > div:last-of-type': {
                            backgroundColor: 'black',
                        },
                    }}
                />
            </Flex>
        </VStack>
    );
};

export default Stepper;
