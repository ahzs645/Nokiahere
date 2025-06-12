import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const StyleKitPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={12} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Style Kit
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Design system and component showcase
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading size="md" mb={4}>Typography</Heading>
            <VStack spacing={4} align="stretch">
              <Heading size="4xl">Heading 4xl</Heading>
              <Heading size="3xl">Heading 3xl</Heading>
              <Heading size="2xl">Heading 2xl</Heading>
              <Heading size="xl">Heading xl</Heading>
              <Heading size="lg">Heading lg</Heading>
              <Heading size="md">Heading md</Heading>
              <Heading size="sm">Heading sm</Heading>
              <Heading size="xs">Heading xs</Heading>
              <Text fontSize="xl">Body text xl</Text>
              <Text fontSize="lg">Body text lg</Text>
              <Text fontSize="md">Body text md</Text>
              <Text fontSize="sm">Body text sm</Text>
              <Text fontSize="xs">Body text xs</Text>
            </VStack>
          </Box>

          <Box>
            <Heading size="md" mb={4}>Components</Heading>
            <VStack spacing={6} align="stretch">
              <Box>
                <Text mb={2}>Buttons</Text>
                <SimpleGrid columns={2} spacing={4}>
                  <Button colorScheme="brand">Primary</Button>
                  <Button colorScheme="brand" variant="outline">Outline</Button>
                  <Button colorScheme="brand" variant="ghost">Ghost</Button>
                  <Button colorScheme="brand" isLoading>Loading</Button>
                </SimpleGrid>
              </Box>

              <Box>
                <Text mb={2}>Progress</Text>
                <VStack spacing={4}>
                  <Progress value={80} colorScheme="brand" />
                  <Progress value={60} colorScheme="brand" size="sm" />
                  <Progress value={40} colorScheme="brand" size="xs" />
                </VStack>
              </Box>

              <Box>
                <Text mb={2}>Stats</Text>
                <SimpleGrid columns={2} spacing={4}>
                  <Stat>
                    <StatLabel>Score</StatLabel>
                    <StatNumber>85</StatNumber>
                    <StatHelpText>out of 100</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel>Rank</StatLabel>
                    <StatNumber>#1</StatNumber>
                    <StatHelpText>in Canada</StatHelpText>
                  </Stat>
                </SimpleGrid>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default StyleKitPage; 