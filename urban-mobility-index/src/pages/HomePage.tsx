import { Box, Container, Heading, Text, SimpleGrid, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const cities = [
  { name: 'Vancouver', score: 85 },
  { name: 'Toronto', score: 82 },
  { name: 'Montreal', score: 79 },
  { name: 'Calgary', score: 77 },
];

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Urban Mobility Index
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Explore and compare urban mobility metrics across major cities
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {cities.map((city) => (
            <MotionBox
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                p={6}
                shadow="xl"
                border="1px solid"
                borderColor="gray.200"
                rounded="lg"
                bg="white"
                _hover={{ transform: 'translateY(-4px)', shadow: '2xl' }}
                transition="all 0.2s"
              >
                <VStack spacing={4} align="stretch">
                  <Heading size="md">{city.name}</Heading>
                  <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                    {city.score}
                  </Text>
                  <Button
                    as={RouterLink}
                    to={`/city/${city.name.toLowerCase()}`}
                    colorScheme="brand"
                    size="lg"
                  >
                    View Details
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage; 