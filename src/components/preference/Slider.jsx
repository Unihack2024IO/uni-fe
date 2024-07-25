import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Text
} from '@chakra-ui/react';

const SliderComponent = ({ text, value, setValue }) => {
    return (
        <>
            <Text fontSize="2xl" fontWeight="500" m='2vw 2vw 1vw 1vw' >{text}</Text>
            <Slider
                aria-label="slider-ex-1"
                defaultValue={value}
                onChange={setValue}
                colorScheme="black"
                width="100%"
                height="30px"
            >
                <SliderTrack
                    sx={{
                        height: "8px", // Adjust this value for thickness
                        borderRadius: "full",
                    }}
                >
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize="33px" borderColor="black" />
                <SliderMark value={0} />
                <SliderMark value={50} />
                <SliderMark value={100} />
            </Slider>
        </>
    )
}
export default SliderComponent;