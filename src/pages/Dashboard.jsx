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
    Tag
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
import supabase from '../supabaseClient.js';
import { useEffect, useState } from "react";

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([])
  const chartOptions = {
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 10, // Adjust as needed to vertically position the legend labels
      itemMargin: {
        vertical: 5 // Adjust as needed to increase or decrease spacing between legend items
      }
    }
  };

  const [products, setProducts] = useState([]);
  const [productStats, setProductStats] = useState([]);
  
  useEffect(() => {
    getProducts();
    getProductStats();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("farmproduct").select();
      if (error) {
        throw error;
      }
  
      // Process data to format it for the chart
      const formattedData = data.map(product => ({
        label: product.product_name, // Assuming each product object has a 'name' property
        value: product.product_weight // Assuming each product object has a 'quantity' property
      }));
  
      // Extract labels from the data
      const labels = formattedData.map(product => product.label);
  
      setProducts(data);
      setChartData(formattedData);
      setChartLabels(labels);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      console.log(chartData);
      console.log(chartLabels);
    }
  }

  async function getProductStats() {
    const { data } = await supabase.from("productstats").select();
    setProductStats(data);
  }
  

  const { colorMode } = useColorMode();

  return (
    <Flex width="100%">
      <Flex direction="column" ml={300} width="100%">
        <Flex>
        {productStats.length > 0 ? (
                productStats.map((stat) => (
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
                                color="gray.500"
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
                                  <Text> {stat.total_products} items</Text>
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
                          <Text color="gray.500" fontSize="sm">
                            <Text as="span" color="green.500" fontWeight="bold">
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
                                color="gray.500"
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
                                  <Text> {stat.total_exp} items</Text>
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
                          <Text color="gray.500" fontSize="sm">
                            <Text as="span" color="green.500" fontWeight="bold">
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
                                color="gray.500"
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
                                  <Text> {stat.total_low} items</Text>
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
                          <Text color="gray.500" fontSize="sm">
                            <Text as="span" color="red.500" fontWeight="bold">
                              -2.82%{" "}
                            </Text>
                            Sejak bulan lalu
                          </Text>
                        </Flex>
                      </Card>
                    </SimpleGrid>
                ))
              ) : (
                <Text>Loading...</Text>
              )}
        </Flex>
        <Flex width="100%" justifyContent="space-between">
        <Card p='0px' maxW={{ sm: "320px", md: "70%", lg: "70%" }} height="555px">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Log Aktivitas
              </Text>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table size="md">
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.500' borderColor={borderColor}>
                      Nama Produk
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Jumlah Produk
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Tanggal Panen
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Logs
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                {products.length > 0 ? (
                  products.slice(-7).reverse().map((product) => (
                      <Tr key="id">
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.product_name}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.product_weight}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.harvest_date}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                    <Tag
                      bg={
                        product.product_logs === "Ditambahkan"
                          ? "#38A169"
                          : product.product_logs === "Expired"
                          ? "#E53E3E"
                          : "#DD6B20"
                      }
                      color="white"
                      fontWeight='semibold'
                      p="6px"
                    >
                      {product.product_logs}
                    </Tag>
                    </Td>
                  </Tr>
                    ))
                  ) : (
                    <Text>Loading...</Text>
                  )}
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