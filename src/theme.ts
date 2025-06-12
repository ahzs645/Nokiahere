import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Stat: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'lg',
          p: 4,
        },
      },
    },
    Progress: {
      baseStyle: {
        track: {
          bg: 'gray.100',
        },
        filledTrack: {
          bg: 'brand.500',
        },
      },
    },
  },
});

export default theme; 