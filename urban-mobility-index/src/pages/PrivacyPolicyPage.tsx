import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const PrivacyPolicyPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Privacy Policy
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Last updated: {new Date().toLocaleDateString()}
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
          <VStack spacing={6} align="stretch">
            <Box>
              <Heading size="md" mb={4}>
                Information We Collect
              </Heading>
              <Text>
                We collect information that you provide directly to us, including:
              </Text>
              <List spacing={2} mt={2} styleType="disc" pl={6}>
                <ListItem>Name and contact information</ListItem>
                <ListItem>Email address</ListItem>
                <ListItem>Usage data and preferences</ListItem>
                <ListItem>Communication preferences</ListItem>
              </List>
            </Box>

            <Box>
              <Heading size="md" mb={4}>
                How We Use Your Information
              </Heading>
              <Text>
                We use the information we collect to:
              </Text>
              <List spacing={2} mt={2} styleType="disc" pl={6}>
                <ListItem>Provide and maintain our services</ListItem>
                <ListItem>Improve and personalize your experience</ListItem>
                <ListItem>Communicate with you about updates and changes</ListItem>
                <ListItem>Analyze usage patterns and trends</ListItem>
              </List>
            </Box>

            <Box>
              <Heading size="md" mb={4}>
                Data Security
              </Heading>
              <Text>
                We implement appropriate security measures to protect your personal
                information. However, no method of transmission over the Internet
                is 100% secure, and we cannot guarantee absolute security.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={4}>
                Your Rights
              </Heading>
              <Text>
                You have the right to:
              </Text>
              <List spacing={2} mt={2} styleType="disc" pl={6}>
                <ListItem>Access your personal information</ListItem>
                <ListItem>Correct inaccurate data</ListItem>
                <ListItem>Request deletion of your data</ListItem>
                <ListItem>Opt-out of communications</ListItem>
              </List>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default PrivacyPolicyPage; 