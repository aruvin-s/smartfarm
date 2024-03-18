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
import { SearchBar }from "../components/SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import supabase from '../supabaseClient.js';
import { Link } from "react-router-dom";

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("farmproduct").select();
      if (error) {
        throw error;
      }
      setProducts(data.reverse());
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }
  
  const { colorMode } = useColorMode();

  return (
    <Flex width="100%">
      <Flex direction="column" ml={300} width="100%">
        <Flex justify='space-between' width="95%">
            <Select placeholder='Semua Produk' height='41px' width='186px' fontSize='14px' bg='white'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Flex>
              <SearchBar me={5} />
              <Link to="/add-product">
                <Button variant='dark' height='41px' width='186px'>
                    Tambah Produk
                </Button>
              </Link>
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
                {products.length > 0 ? (
                  products.map((product) => (
                      <Tr key="id">
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.product_name}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.product_weight}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.product_freshness}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                      {product.harvest_date}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                    {product.exp_date}
                    </Td>
                    <Td color='gray.500' borderColor={borderColor}>
                    <Tag
                      bg={
                        product.product_logs === "Added"
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
        </Flex>
      </Flex>
    </Flex>
  );
}