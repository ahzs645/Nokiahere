import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const sources = [
  {
    name: 'HERE Technologies',
    description: 'Real-time traffic and mobility data',
    url: 'https://www.here.com',
  },
  {
    name: 'OpenStreetMap',
    description: 'Open-source mapping data',
    url: 'https://www.openstreetmap.org',
  },
  {
    name: 'World Bank',
    description: 'Urban development indicators',
    url: 'https://data.worldbank.org',
  },
  {
    name: 'UN Habitat',
    description: 'Urban sustainability metrics',
    url: 'https://unhabitat.org',
  },
];

const ExternalSourcesPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            External Sources
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Data sources and references used in our analysis
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
          <List spacing={6}>
            {sources.map((source) => (
              <ListItem key={source.name}>
                <Box>
                  <Link
                    href={source.url}
                    isExternal
                    color="brand.500"
                    fontWeight="bold"
                    fontSize="lg"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    {source.name}
                    <ExternalLinkIcon />
                  </Link>
                  <Text mt={2} color="gray.600">
                    {source.description}
                  </Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default ExternalSourcesPage; 