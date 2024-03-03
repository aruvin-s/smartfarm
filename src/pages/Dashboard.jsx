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
import DonutChart from "../components/Chart/DonutChart.jsx";

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
    <Flex>
      <Sidebar />
      <Flex direction="column" ml={300} width="80%" height="100vh">
        <Flex>
          <SimpleGrid
              columns={{ sm: 1, md: 2, xl: 3 }}
              spacing="24px"
              mb="20px"
              width="100%"
            >
              <Card minH="125px">
                <Flex direction="column">
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="center"
                    w="100%"
                    mb="25px"
                  >
                    <Stat me="auto">
                      <StatLabel
                        fontSize="xs"
                        color="gray.400"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        TOTAL JUMLAH PRODUK
                      </StatLabel>
                      <Flex>
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          250 items
                        </StatNumber>
                      </Flex>
                    </Stat>
                    <IconBox
                      borderRadius="50%"
                      as="box"
                      h={"45px"}
                      w={"45px"}
                      bg={iconBlue}
                    >
                      <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                  </Flex>
                  <Text color="gray.400" fontSize="sm">
                    <Text as="span" color="green.400" fontWeight="bold">
                      +3.48%{" "}
                    </Text>
                    Sejak bulan lalu
                  </Text>
                </Flex>
              </Card>
              <Card minH="125px">
                <Flex direction="column">
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="center"
                    w="100%"
                    mb="25px"
                  >
                    <Stat me="auto">
                      <StatLabel
                        fontSize="xs"
                        color="gray.400"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        PRODUK KADALUWARSA
                      </StatLabel>
                      <Flex>
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          250 items
                        </StatNumber>
                      </Flex>
                    </Stat>
                    <IconBox
                      borderRadius="50%"
                      as="box"
                      h={"45px"}
                      w={"45px"}
                      bg="#E53E3E"
                    >
                      <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                  </Flex>
                  <Text color="gray.400" fontSize="sm">
                    <Text as="span" color="green.400" fontWeight="bold">
                      +5.2%{" "}
                    </Text>
                    Sejak bulan lalu
                  </Text>
                </Flex>
              </Card>
              <Card minH="125px">
                <Flex direction="column">
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="center"
                    w="100%"
                    mb="25px"
                  >
                    <Stat me="auto">
                      <StatLabel
                        fontSize="xs"
                        color="gray.400"
                        fontWeight="bold"
                        textTransform="uppercase"
                      >
                        PRODUK STOK RENDAH
                      </StatLabel>
                      <Flex>
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          25 items
                        </StatNumber>
                      </Flex>
                    </Stat>
                    <IconBox
                      borderRadius="50%"
                      as="box"
                      h={"45px"}
                      w={"45px"}
                      bg="#DD6B20"
                    >
                      <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                  </Flex>
                  <Text color="gray.400" fontSize="sm">
                    <Text as="span" color="red.500" fontWeight="bold">
                      -2.82%{" "}
                    </Text>
                    Sejak bulan lalu
                  </Text>
                </Flex>
              </Card>
          </SimpleGrid>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
        <Card p='0px' maxW={{ sm: "320px", md: "70%", lg: "70%" }} >
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Log Aktivitas
              </Text>
              <Button variant='dark' maxH='30px'>
                SEE ALL
              </Button>
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
                      Tanggal Penanaman
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Logs
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
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
                      2023-03-08
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk A
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk B
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      20
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      2023-03-10
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk B
                    </Td>
                  </Tr>
                  <Tr key="placeholder">
                    <Td color='gray.400' borderColor={borderColor}>
                      Produk C
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      30
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      2023-03-12
                    </Td>
                    <Td color='gray.400' borderColor={borderColor}>
                      Log aktivitas untuk Produk C
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "28%", lg: "28%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Data Penyimpanan
              </Text>
              <Button variant='dark' maxH='30px'>
                SEE ALL
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }} width="100%" height="250px"> {/* Adjust width and height as needed */}
              <DonutChart chartData={chartData} chartOptions={chartOptions} />
            </Box>
          </Flex>
        </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}