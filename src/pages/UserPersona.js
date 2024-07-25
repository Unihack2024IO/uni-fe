import React, { useState } from 'react';
import { Box, Flex, Button } from "@chakra-ui/react";
import SideWall from "../components/preference/SideWall";
import SaveAndExit from "../components/preference/SaveAndExit";
import Stepper from "../components/preference/Stepper";
import BasicInfo from "../components/preference/BasicInfo";
import blue from '../assets/images/walls/blue.jpg';
import VacationInfo from '../components/preference/VacationInfo';
import HotelInfo from '../components/preference/HotelInfo';
import EatingInfo from '../components/preference/EatingInfo';
const steps = [
    { title: "Hãy để ExploreNow biết thêm về bạn", component: <BasicInfo /> },
    { title: "Chuyến đi bạn mong muốn", component: <VacationInfo /> },
    { title: "Nơi nghỉ ngơi phù hợp...", component: <HotelInfo /> },
    { title: "Món ăn bạn có thể yêu thích...", component: <EatingInfo /> },
    { title: "Bắt đầu khám phá du lịch Đà Nẵng theo sở thích cá nhân ngay bây giờ", component: <Box>Results</Box> }
];

export default function UserPersona() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        travelCompanion: '',
        location: ''
    });

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const updateFormData = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const CurrentComponent = React.cloneElement(steps[currentStep].component, { formData, updateFormData });

    return (
        <Flex>
            <SideWall picture={blue} width="50%" position="fixed" top="0" left="0" bottom="0" />
            <Box width="50%" position="relative">
                <SaveAndExit position="absolute" top="10%" right="10%" />
                <Box m='3vw'>
                    <Stepper
                        currentStep={currentStep}
                        steps={steps}
                        currentStepComponent={CurrentComponent}
                    />
                    <Flex
                        justify="space-between"
                        w="80%"
                        position="absolute"
                        bottom="5%"
                    >
                        <Button borderRadius='full' onClick={handlePrevious} disabled={currentStep === 0}>
                            Previous
                        </Button>
                        <Button borderRadius='full' onClick={handleNext} disabled={currentStep === steps.length - 1}>
                            Next
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}
