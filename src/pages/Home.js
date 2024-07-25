import wallpaper from '../assets/images/walls/home.png';
import { Box, Image } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import Start from '../components/common/Start';
export default function Home() {
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
                <Navbar />
            </div>

            <div>
                <Image
                    src={wallpaper}
                    alt="Main UI"
                    width="100vw"
                    height="100vh"
                    objectFit="cover"
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%"
                }}
            >
                <Start />
            </div>

        </Box>
    );
}
