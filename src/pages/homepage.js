import NavBar from '../components/common/navbar';
import mainui from '../assets/images/mainui.png';
import { Box, Image } from '@chakra-ui/react';
import { MainMessage } from '../components/common/navbar';
export default function HomePage() {
    return (
        <Box
            width="full"
            minHeight="70vh"
            position="relative"
        >
            <div
                style={{
                    position: "absolute",
                    width: "100%"
                }}
            >
                <NavBar />
            </div>

            <div>
                <Image src={mainui} alt="Main UI" width="100%" height="100%" objectFit="cover" />
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "25%",
                    left: "5%"
                }}
            >
                <MainMessage />
            </div>

        </Box>
    );
}
