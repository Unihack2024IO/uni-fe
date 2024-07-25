import { Divider, Box, AbsoluteCenter } from '@chakra-ui/react'
const DividerComponent = ({ content }) => {
    return (
        <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
                {content}
            </AbsoluteCenter>
        </Box>
    );
}
export default DividerComponent;