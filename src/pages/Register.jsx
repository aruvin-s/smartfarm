import { Box, Card, CardBody, Text, Input, Flex } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import loginImage from '../assets/loginimage.png';

const Login = () => {
  return (
    <Flex 
    align="center" 
    justify="center" 
    height="100vh" 
    bgImage={`url(${loginImage})`} 
    backgroundSize="cover"
    backgroundPosition="center">
      <Card w={452} h={629}>
        <CardBody mt={10}>
          <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
            Register
          </Text>
          <Text fontSize="md" mb={4} textAlign="center">
            Register as an admin to continue
          </Text>

          <Box mb={4}>
            <Text>Username</Text>
            <Input placeholder='Enter your username' />
          </Box>

          <Box mb={4}>
            <Text>Email</Text>
            <Input placeholder='Enter your email' />
          </Box>

          <Box mb={4}>
            <Text>Password</Text>
            <Input type='password' placeholder='Enter your password' />
          </Box>

          <Button mt={24} width='full' colorScheme='blue'>Button</Button>
          <Text mt={4} textAlign="center">Already registered? Sign In</Text>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Login;
