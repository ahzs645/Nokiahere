import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const NotFoundPage = () => {
  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={8} align="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <Heading as="h1" size="2xl" mb={4}>
            404 - Page Not Found
          </Heading>
          <Text fontSize="xl" color="gray.600" mb={8}>
            The page you're looking for doesn't exist or has been moved.
          </Text>
          <Button
            as={RouterLink}
            to="/"
            colorScheme="brand"
            size="lg"
          >
            Return to Home
          </Button>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default NotFoundPage; 