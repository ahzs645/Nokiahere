import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Text,
  Progress,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface MobilityData {
  score: number;
  publicTransport: number;
  sustainability: number;
  innovation: number;
  details: {
    publicTransport: {
      coverage: number;
      frequency: number;
      accessibility: number;
    };
    sustainability: {
      emissions: number;
      greenSpaces: number;
      bikeInfrastructure: number;
    };
    innovation: {
      smartCity: number;
      digitalServices: number;
      futureReadiness: number;
    };
  };
}

const mockData: MobilityData = {
  score: 75,
  publicTransport: 82,
  sustainability: 68,
  innovation: 79,
  details: {
    publicTransport: {
      coverage: 85,
      frequency: 78,
      accessibility: 83,
    },
    sustainability: {
      emissions: 65,
      greenSpaces: 72,
      bikeInfrastructure: 67,
    },
    innovation: {
      smartCity: 81,
      digitalServices: 76,
      futureReadiness: 80,
    },
  },
};

const CityDashboard: React.FC = () => {
  const { cityName = 'vancouver' } = useParams<{ cityName: string }>();

  return (
    <Container maxW="container.xl" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1" size="2xl" mb={6} textTransform="capitalize">
          {cityName} Urban Mobility Index
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mb={8}>
          <StatCard
            label="Overall Score"
            value={mockData.score}
            helpText="out of 100"
          />
          <StatCard
            label="Public Transport"
            value={mockData.publicTransport}
            helpText="score"
          />
          <StatCard
            label="Sustainability"
            value={mockData.sustainability}
            helpText="score"
          />
          <StatCard
            label="Innovation"
            value={mockData.innovation}
            helpText="score"
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <DetailSection
            title="Public Transport"
            data={mockData.details.publicTransport}
          />
          <DetailSection
            title="Sustainability"
            data={mockData.details.sustainability}
          />
          <DetailSection
            title="Innovation"
            data={mockData.details.innovation}
          />
        </SimpleGrid>
      </MotionBox>
    </Container>
  );
};

interface StatCardProps {
  label: string;
  value: number;
  helpText: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, helpText }) => (
  <MotionBox
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Stat
      px={4}
      py={5}
      shadow="xl"
      border="1px solid"
      borderColor="gray.200"
      rounded="lg"
      bg="white"
    >
      <StatLabel fontSize="lg">{label}</StatLabel>
      <StatNumber fontSize="4xl" color="brand.500">
        {value}
      </StatNumber>
      <StatHelpText>{helpText}</StatHelpText>
    </Stat>
  </MotionBox>
);

interface DetailSectionProps {
  title: string;
  data: Record<string, number>;
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, data }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Box
      p={6}
      shadow="xl"
      border="1px solid"
      borderColor="gray.200"
      rounded="lg"
      bg="white"
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      {Object.entries(data).map(([key, value]) => (
        <Box key={key} mb={4}>
          <Flex justify="space-between" mb={2}>
            <Text textTransform="capitalize">{key}</Text>
            <Text fontWeight="bold">{value}%</Text>
          </Flex>
          <Progress value={value} colorScheme="brand" rounded="full" />
        </Box>
      ))}
    </Box>
  </MotionBox>
);

export default CityDashboard; 