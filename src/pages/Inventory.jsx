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
import BarChart from "../components/Chart/BarChart.jsx";
import HorizontalChart from "../components/Chart/HorizontalChart.jsx";
import supabase from '../supabaseClient.js';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MaterialSymbol } from 'react-material-symbols';

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const [products, setProducts] = useState([]);
  const [expProducts, setExpProducts] = useState([]);
  const [lowProducts, setLowProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [expiredProductsCount, setExpiredProductsCount] = useState(0);
  const [lowProductsCount, setLowProductsCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts();
    getExpProducts();
    getLowProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("farmproducts").select().order("product_weight", { ascending: true });
      if (error) {
        throw error;
      }
  
      setProducts(data);
      setTotalProducts(data.length);
      setExpiredProductsCount(data.filter(product => product.product_logs === "Kadaluwarsa").length);
      setLowProductsCount(data.filter(product => product.product_logs === "Stok Rendah").length);
      
      
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  async function handleProductSelect(productName) {
    try {
      const { data, error } = await supabase
        .from("farmproducts")
        .select("*")
        .eq("product_name", productName)
        .single();
  
      if (error) {
        throw error;
      }
  
      if (data) {
        setSelectedProduct(data);
      } else {
        console.log("No data found for product:", productName);
      }
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  }
  
  async function getExpProducts() {
    try {
      const { data, error } = await supabase
        .from("farmproducts")
        .select()
        .eq("product_logs", "Kadaluwarsa")
        .order("product_weight", { ascending: false })
        .limit(4);
  
      if (error) {
        throw error;
      }
  
      setExpProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  async function getLowProducts() {
    try {
      const { data, error } = await supabase
        .from("farmproducts")
        .select()
        .eq("product_logs", "Stok Rendah")
        .order("product_weight", { ascending: false })
        .limit(4);;
  
      if (error) {
        throw error;
      }
  
      setLowProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = Array(12).fill(0);
  const chartLabels = months;

  products.forEach((product) => {
    const createdAt = new Date(product.harvest_date);
    const monthIndex = createdAt.getMonth();
    chartData[monthIndex] += product.product_weight;
  });

  const chartSeriesNames = products.map((product) => product.product_name);
  const chartSeries = chartData;

  const yearsDataMulti = {
    categories: chartLabels,
    series: [chartSeries],
    seriesNames: [chartSeriesNames]
  };

  const singleData = {
    categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Des"],
    series: [30, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 100],
  };


  const expCategories = expProducts.map((expired) => [expired.product_name]);
  const expSeries = expProducts.map((expired) => expired.product_weight);

  const lowCategories = lowProducts.map((low) => [low.product_name]);
  const lowSeries = lowProducts.map((low) => low.product_weight);

  const mostCategories = products.slice(-4).map((most) => [most.product_name]);
  const mostSeries = products.slice(-4).map((most) => most.product_weight);

  const expProductsData = {
    categories: expCategories,
    series: expSeries
  };

  const lowProductsData = {
    categories: lowCategories,
    series: lowSeries
  }

  const mostProductsData =  {
    categories: mostCategories.reverse(),
    series: mostSeries.reverse()
  }

  return (
    <Flex>
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
        <Flex>
        <SimpleGrid
              columns={{ sm: 1, md: 2, xl: 3 }}
              spacing="24px"
              mb="20px"
              width="100%"
            >
              <Card minH="410px">
              <Flex direction="column" align="center">
                <Flex width="100%">
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Produk Berdasarkan Jenis
                    </Text>
                </Flex>
                    <HorizontalChart data={mostProductsData} />
                </Flex>
              </Card>
              <Card minH="410px">
              <Flex direction="column" align="center">
                <Flex width="100%">
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Produk Kadaluwarsa
                    </Text>
                </Flex>
                    <HorizontalChart data={expProductsData} />
                </Flex>
              </Card>
              <Card minH="410px">
              <Flex direction="column" align="center">
                <Flex width="100%">
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Produk Stok Rendah
                    </Text>
                </Flex>
                    <HorizontalChart data={lowProductsData} />
                </Flex>
              </Card>
          </SimpleGrid>
        </Flex>
        <Flex>
        <SimpleGrid
              columns={{ sm: 1, md: 2, xl: 2 }}
              spacing="24px"
              mb="20px"
              width="100%"
            >
              <Card minH="410px">
                <Flex direction="column" align="center">
                <Flex width="100%" mb={10}>
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Ringkasan Penyimpanan
                    </Text>
                </Flex>
                    <BarChart data={yearsDataMulti} />
                </Flex>
              </Card>
              <Card minH="410px">
                <Flex direction="column" align="center">
                <Flex width="100%" mb={10} justify="space-between">
                   <Text fontSize='lg' color={textColor} fontWeight='bold' w="50%">
                        Ringkasan Produk
                    </Text>
                    <Select
                      placeholder="Pilih Kategori Produk"
                      fontSize="14px"
                      bg="white"
                      borderRadius="md"
                      size="sm"
                      w="40%"
                      onChange={(event) => handleProductSelect(event.target.value)}
                    >
                      {products.map((product) => (
                        <option key={product.id} value={product.product_name}>
                          {product.product_name}
                        </option>
                      ))}
                    </Select>
                </Flex>
                    <BarChart data={singleData} />
                </Flex>
              </Card>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}