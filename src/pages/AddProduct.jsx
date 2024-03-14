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
    Textarea
  } from "@chakra-ui/react";
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
  } from "../components/Icons/Icons.jsx";
import IconBox from "../components/Icons/IconBox.jsx";
import Card from "../components/Card/Card.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { SearchBar }from "../components/SearchBar/SearchBar.jsx";

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const chartData = [44, 55, 41, 17, 15];
  const chartOptions = {
    labels: ["Tomato", "Potato", "Carrot", "Cabbage", "Apple"],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 10, // Adjust as needed to vertically position the legend labels
      itemMargin: {
        vertical: 5 // Adjust as needed to increase or decrease spacing between legend items
      }
    }
  };
  
  

  const { colorMode } = useColorMode();

  return (
    <Flex width="100%">
      <Sidebar />
      <Flex direction="column" ml={300} width="80%" height="100vh">
        <Flex width="100%" height="100%" justifyContent="space-between" mt={5}>
        <Card p='0px' maxW={{ sm: "320px", md: "95%", lg: "95%" }} maxH={{ md: "95%", lg: "95%" }} borderRadius="md" bg="white">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
            <FormControl>
                <SimpleGrid columns={2} spacing={2}>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Nama Produk
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
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Kategori
                        </FormLabel>
                        <Select placeholder='Semua Produk' fontSize='14px' bg='white' size="lg" ms="4px">
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Berat Produk
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
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Tanggal Panen
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
                    </Box>
                    <Box>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Tanggal Kadaluwarsa
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
                    </Box>
                </SimpleGrid>
                <Flex justifyContent="space-between" mb={4}>
                    <Box width="43%">
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                Gambar Produk
                                </FormLabel>
                                <Textarea
                                placeholder="@johndoe"
                                />
                    </Box>
                    <Box width="55%">
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Tanggal Kadaluwarsa
                            </FormLabel>
                            <Textarea
                            placeholder="@johndoe"
                            />
                    </Box>
                </Flex>
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
                    Tambah Produk
                    </Button>
                    <Button
                    fontSize="10px"
                    variant="dark"
                    fontWeight="bold"
                    w="100%"
                    h="45"
                    mb="24px"
                    >
                    Masuk
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