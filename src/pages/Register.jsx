import {
  Card,
  CardBody,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import loginImage from '../assets/loginimage.png';
import logo from '../assets/logowhite.png';

const Login = () => {
  const bgForm = useColorModeValue('white', 'navy.800');
  const titleColor = useColorModeValue('gray.700', 'blue.500');
  const textColor = useColorModeValue('gray.700', 'white');
  const colorIcons = useColorModeValue('gray.700', 'white');
  const bgIcons = useColorModeValue('transparent', 'navy.700');
  const bgIconsHover = useColorModeValue('gray.50', 'whiteAlpha.100');

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="column"
    >
      <img src={logo} alt="Logo Apps" style={{ width: '150px', marginBottom: '20px' }} />
      <Box
        position="absolute"
        minH={{ base: '70vh', md: '50vh' }}
        maxH={{ base: '70vh', md: '50vh' }}
        w={{ md: 'calc(100vw - 50px)' }}
        maxW={{ md: 'calc(100vw - 50px)' }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={loginImage}
        bgSize="cover"
        mx={{ md: 'auto' }}
        mt={{ md: '14px' }}
        borderRadius={{ base: '0px', md: '20px' }}
      ></Box>
      <Card w={452} h={629} display="flex" alignItems="center">
        <CardBody w={350} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Daftar
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Username
            </FormLabel>
            <Input
              variant="auth"
              fontSize="sm"
              ms="4px"
              type="text"
              placeholder="@johndoe"
              mb="24px"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Sandi
            </FormLabel>
            <Input
              variant="auth"
              fontSize="sm"
              ms="4px"
              type="text"
              placeholder="Masukkan sandi anda"
              mb="24px"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Konfirmasi Sandi
            </FormLabel>
            <Input
              variant="auth"
              fontSize="sm"
              ms="4px"
              type="password"
              placeholder="Konfirmasi Sandi Anda"
              mb="24px"
              size="lg"
            />
            <Button
              fontSize="10px"
              variant="dark"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
            >
              Daftar
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Sudah punya akun?
              <Link color={titleColor} as="span" ms="5px" href="#" fontWeight="bold">
                Masuk
              </Link>
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Login;
