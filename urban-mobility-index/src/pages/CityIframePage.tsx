import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const CityIframePage = () => {
  const { cityName = 'vancouver' } = useParams<{ cityName: string }>();

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Flex justify="space-between" align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" textTransform="capitalize">
              {cityName} Granular Data
            </Heading>
            <Text fontSize="lg" color="gray.600" mt={2}>
              Detailed mobility metrics and analysis
            </Text>
          </MotionBox>
          <Button
            as={RouterLink}
            to={`/city/${cityName}`}
            colorScheme="brand"
            variant="outline"
            size="lg"
          >
            Back to Overview
          </Button>
        </Flex>

        <Box
          p={6}
          shadow="xl"
          border="1px solid"
          borderColor="gray.200"
          rounded="lg"
          bg="white"
          minH="600px"
        >
          {/* Here you would typically embed your detailed visualization or iframe */}
          <Text textAlign="center" color="gray.500">
            Detailed visualization coming soon...
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default CityIframePage; 