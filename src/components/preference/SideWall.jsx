import { Image } from '@chakra-ui/react';
export default function SideWall({ picture }) {
    return (
        <Image src={picture} alt="bluewall"
            width="50vw"
            height="100vh"
            objectFit="cover"
            borderRightRadius="20"
        />
    );
}