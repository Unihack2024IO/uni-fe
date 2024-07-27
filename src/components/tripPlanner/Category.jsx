import { Card, CardHeader, CardBody, CardFooter, Heading, SimpleGrid } from '@chakra-ui/react'
import dog from '../../assets/images/walls/dog.png'
const Category = ({ category }) => {
    return (
        <SimpleGrid spacing={4}>
            <Card backgroundImage={dog} backgroundSize="cover" backgroundPosition="center">
                <CardBody>
                    <Heading size='md'>TO DO</Heading>
                </CardBody>
            </Card>
        </SimpleGrid>
    )
}

export default Category;    