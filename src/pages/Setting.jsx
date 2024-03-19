import {
    Box,
    Button,
    Flex,
    Grid,
    Progress,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
    Select,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Avatar
  } from "@chakra-ui/react";
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
  } from "../components/Icons/Icons.jsx";
import Card from "../components/Card/Card.jsx";
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lahan, setLahan] = useState("");
  const [lokasi, setLokasi] = useState("");
  
  

  const { colorMode } = useColorMode();

  return (
    <Flex width="100%" height="100%">
      <Flex direction="column" ml={300} width="100%" height="95vh">
        <Flex width="100%" height="100%" justifyContent="space-between">
        <Card p='0px' maxW={{ sm: "320px", md: "95%", lg: "95%" }}  borderRadius="20px" bg="white">
          <Flex direction='column'>
            <Flex direction="column" justify='space-between' p='22px'>
            <Avatar size='2xl' my={4} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <FormControl>
                <SimpleGrid columns={2} spacing={2}>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Email
                        </FormLabel>
                        <Input
                        isReadOnly="true"
                        value="wiraprathamaalvin@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        variant="auth"
                        fontSize="sm"
                        ms="4px"
                        type="text"
                        placeholder="@johndoe"
                        mb="24px"
                        size="lg"
                        />
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Password
                        </FormLabel>
                        <Input
                        isReadOnly="true"
                        value="denpasar"
                        onChange={(e) => setPassword(e.target.value)}
                        variant="auth"
                        fontSize="sm"
                        ms="4px"
                        type="password"
                        placeholder="@johndoe"
                        mb="24px"
                        size="lg"
                        />
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Nama Lahan
                        </FormLabel>
                        <Input
                        isReadOnly="true"
                        value="Sawah Hijau"
                        onChange={(e) => setLahan(e.target.value)}
                        variant="auth"
                        fontSize="sm"
                        ms="4px"
                        type="text"
                        placeholder="@johndoe"
                        mb="24px"
                        size="lg"
                        />
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Lokasi Lahan
                        </FormLabel>
                        <Input
                        isReadOnly="true"
                        value="Jalan Gajah Waktra blok VII no 1"
                        onChange={(e) => setLokasi(e.target.value)}
                        variant="auth"
                        fontSize="sm"
                        ms="4px"
                        type="text"
                        placeholder="@johndoe"
                        mb="24px"
                        size="lg"
                        />
                    </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={2} width="50%">
                    <Button
                    fontSize="10px"
                    bgColor="green.500"
                    color="white"
                    fontWeight="bold"
                    w="100%"
                    h="45"
                    mb="24px"
                    >
                    Edit Profil
                    </Button>
                </SimpleGrid>
            </FormControl>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            </Box>
          </Flex>
        </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}