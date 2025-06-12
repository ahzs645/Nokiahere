import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChartLine, FaLeaf, FaCity } from 'react-icons/fa';

const MotionBox = motion(Box);

const features = [
  {
    icon: FaChartLine,
    title: 'Data-Driven Insights',
    description:
      'Our platform uses real-time data and advanced analytics to provide comprehensive insights into urban mobility patterns.',
  },
  {
    icon: FaLeaf,
    title: 'Sustainability Focus',
    description:
      'We help cities track and improve their environmental impact through sustainable mobility solutions.',
  },
  {
    icon: FaCity,
    title: 'Smart City Integration',
    description:
      'Our tools integrate with existing smart city infrastructure to provide a holistic view of urban mobility.',
  },
];

const AboutPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={12} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            About Urban Mobility Index
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Empowering cities with data-driven mobility insights
          </Text>
        </MotionBox>

        <Box
          p={6}
          shadow="xl"
          border="1px solid"
          borderColor="gray.200"
          rounded="lg"
          bg="white"
        >
          <VStack spacing={8} align="stretch">
            <Text fontSize="lg">
              The Urban Mobility Index is a comprehensive platform that helps cities
              understand, analyze, and improve their mobility infrastructure. By
              combining real-time data with advanced analytics, we provide
              actionable insights for urban planners, policymakers, and citizens.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {features.map((feature) => (
                <Box
                  key={feature.title}
                  p={6}
                  border="1px solid"
                  borderColor="gray.200"
                  rounded="lg"
                >
                  <VStack spacing={4} align="center" textAlign="center">
                    <Icon
                      as={feature.icon}
                      w={10}
                      h={10}
                      color="brand.500"
                    />
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="gray.600">{feature.description}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            <Box>
              <Heading size="md" mb={4}>
                Our Mission
              </Heading>
              <Text>
                We believe that data-driven insights are key to creating more
                sustainable, efficient, and livable cities. Our mission is to
                empower urban communities with the tools and information they need
                to make informed decisions about mobility infrastructure and
                policies.
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutPage; 