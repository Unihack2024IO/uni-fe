import { Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid, Flex } from '@chakra-ui/react'
import blue from '../../assets/images/walls/blue.jpg'
const Category = ({ category }) => {
    return (
        <SimpleGrid spacing={4}>
            <Flex direction="column">
                <Flex justifyContent="center">
                    <Card backgroundImage={blue} backgroundSize="cover" backgroundPosition="center">
                        <CardBody>
                            <Heading size='md'>TO DO</Heading>
                        </CardBody>
                    </Card>
                    <Card backgroundImage={blue} backgroundSize="cover" backgroundPosition="center">
                        <CardBody>
                            <Heading size='md'>TO DO</Heading>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex justifyContent="center">
                    <Card backgroundImage={blue} backgroundSize="cover" backgroundPosition="center">
                        <CardBody>
                            <Heading size='md'>TO DO</Heading>
                        </CardBody>
                    </Card>
                    <Card backgroundImage={blue} backgroundSize="cover" backgroundPosition="center">
                        <CardBody>
                            <Heading size='md'>TO DO</Heading>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>
        </SimpleGrid>
    )
}

export default Category;    