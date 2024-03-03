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
    Select
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
    <Flex bg='green.500'>
      <Sidebar />
      <Flex direction="column" mt={20} ml={300} width="80%" height="100vh">
        <Flex justify='space-between' width="95%">
            <Select placeholder='Semua Produk' height='41px' width='186px' fontSize='14px' bg='white'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Flex>
              <SearchBar me={5} />
              <Button variant='dark' height='41px' width='186px'>
                  Tambah Produk
              </Button>
            </Flex>
        </Flex>
        <Flex width="100%" justifyContent="space-between" mt={5}>
        <Card p='0px' maxW={{ sm: "320px", md: "95%", lg: "95%" }} borderRadius="md" bg="white">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Produk Pertanian
              </Text>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Nama Produk
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Jumlah Produk
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Kualitas Produk
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Tanggal Penanaman
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Tanggal Panen
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Aksi
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk A
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Segar
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2024
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      23 Desember 2025
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Edit
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}