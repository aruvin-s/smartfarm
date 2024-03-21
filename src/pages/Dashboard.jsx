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
    Tag,
    Tooltip,
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
import { Link } from "react-router-dom";
import { MaterialSymbol } from 'react-material-symbols';

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const [products, setProducts] = useState([]);
  const [productStats, setProductStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [expiredProductsCount, setExpiredProductsCount] = useState(0);
  const [lowProductsCount, setLowProductsCount] = useState(0);
  
  const chartOptions = {
    labels: chartLabels,
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      offsetY: 10, // Adjust as needed to vertically position the legend labels
      itemMargin: {
        vertical: 5 // Adjust as needed to increase or decrease spacing between legend items
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("farmproducts").select();
      if (error) {
        throw error;
      }
  
      setProducts(data);
      setTotalProducts(data.length);
      setExpiredProductsCount(data.filter(product => product.product_logs === "Kadaluwarsa").length);
      setLowProductsCount(data.filter(product => product.product_logs === "Stok Rendah").length);

      const newData = data.map(product => parseFloat(product.product_weight));
      const newLabels = data.map(product => product.product_name);
      setChartData(newData);
      setChartLabels(newLabels);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  const { colorMode } = useColorMode();

  return (
    <Flex width="100%">
      <Flex direction="column" ml={300} width="100%">
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
                                  <Text>{totalProducts} items</Text>
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
                              <MaterialSymbol icon="nutrition" size={20} fill  color='white' />
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
                                  <Text> {expiredProductsCount} items</Text>
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
                              <MaterialSymbol icon="brightness_alert" size={20} fill  color='white' />
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
                                  <Text> {lowProductsCount} items</Text>
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
                              <MaterialSymbol icon="inventory_2" size={20} fill  color='white' />
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
        </Flex>
        <Flex width="100%" justifyContent="space-between">
        <Card p='0px' maxW={{ sm: "320px", md: "70%", lg: "70%" }}>
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
                      <Tooltip hasArrow label="Klik disini untuk membuka produk">
                        <Link to={`/view-product/${product.id}`}>
                        {product.product_name}
                        </Link>
                      </Tooltip>
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
                          : product.product_logs === "Kadaluwarsa"
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
              <Tooltip hasArrow label="Klik disini untuk melihat semua produk">
              <Link to="/product-list">
                <Button variant='dark' maxH='30px'>
                  SEE ALL
                </Button>
              </Link>
              </Tooltip>
            </Flex>
            <Box overflow="hidden" width="100%" height="100%">
                {/* Adjusted width and height */}
                <DonutChart chartData={chartData} chartOptions={chartOptions} />
              </Box>
          </Flex>
        </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}