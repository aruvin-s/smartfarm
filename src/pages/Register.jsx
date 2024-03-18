import {
  Card,
  CardBody,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import loginImage from '../assets/loginimage.png';
import logo from '../assets/logowhite.png';
import supabase from '../supabaseClient.js';
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const titleColor = useColorModeValue('gray.700', 'blue.500');
  const textColor = useColorModeValue('gray.700', 'white');

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister= async (e) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
  
    if (error) {
        console.error('Register Failed', error.message);
    } else {
        console.log('Register Success', data);
        setEmail('');
        setPassword('');
        navigate('/login');
    }
  };

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
      <Card w={452} h={629} display="flex" alignItems="center" borderRadius="20px" boxShadow= "0px 5px 14px rgba(0, 0, 0, 0.05)">
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
          <form onSubmit={handleRegister} style={{ width: '100%' }}>
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
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="auth"
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Masukkan email anda"
                mb="24px"
                size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Sandi
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="auth"
                fontSize="sm"
                ms="4px"
                type="password"
                placeholder="Masukkan Sandi Anda"
                mb="24px"
                size="lg"
              />
              <Button
                type="submit"
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
          </form>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Sudah punya akun?
              <Link color={titleColor} as="span" ms="5px"  to="/login" fontWeight="bold">
                Masuk
              </Link>
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Register;
