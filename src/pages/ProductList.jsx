import React, { useState, useEffect } from "react";
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
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import supabase from '../supabaseClient.js';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  useEffect(() => {
    if (selectedFilter === 'Kadaluwarsa') {
      getExpProducts();
    } else if (selectedFilter === 'Stok Rendah') {
      getLowProducts();
    } else {
      getProducts();
    }
  }, [selectedFilter]);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("farmproducts").select();
      if (error) {
        throw error;
      }
      setProducts(data.reverse());
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  async function getExpProducts() {
    try {
      const { data, error } = await supabase
        .from("farmproducts")
        .select()
        .eq("product_logs", "Kadaluwarsa")
        .order("product_weight", { ascending: false });

      if (error) {
        throw error;
      }

      setFilteredProducts(data);
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
        .order("product_weight", { ascending: false });

      if (error) {
        throw error;
      }

      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }

  const handleDeleteProduct = async (id) => {
    const { data, error } = await supabase.from('farmproducts').delete().eq("id", id);

    if (error) {
      console.error('Error delete product', error.message);
    } else {
      console.log('Product deleted', data);
      getProducts();
    }
  };

  const filterProducts = () => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Flex width="100%">
      <Flex direction="column" ml={300} width="100%">
        <Flex justify='space-between' width="95%">
          <Select
            placeholder='Semua Produk'
            height='41px'
            width='186px'
            fontSize='14px'
            bg='white'
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value='Stok Rendah'>Stok Rendah</option>
            <option value='Kadaluwarsa'>Kadaluwarsa</option>
          </Select>
          <Flex>
            <SearchBar me={5} onChange={handleSearchInputChange} value={searchQuery} />
            <Link to="/add-product">
              <Button variant='dark' height='41px' width='186px'>
                Tambah Produk
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex width="100%" justifyContent="space-between" mt={5}>
          <Card p='0px' maxW={{ sm: "320px", md: "95%", lg: "95%" }} height="87vh" borderRadius="20px" bg="white">
            <Flex direction='column'>
              <Flex align='center' justify='space-between' p='22px'>
                <Text fontSize='lg' fontWeight='bold'>
                  Produk Pertanian
                </Text>
              </Flex>
              <Box overflow={{ sm: "scroll", lg: "hidden" }}>
                <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.500' borderColor={borderColor}>
                      Nama Produk
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Jumlah Produk
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Kualitas Produk
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Tanggal Panen
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Tanggal Kadaluwarsa
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Aksi
                    </Th>
                  </Tr>
                </Thead>
                  <Tbody>
                    {filteredProducts.map((product) => (
                      <Tr key={product.id}>
                          <Td color='gray.500' borderColor={borderColor}>
                          <Link to={`/view-product/${product.id}`}>
                          {product.product_name}
                          </Link>
                        </Td>
                        <Td color='gray.500' borderColor={borderColor}>{product.product_weight}</Td>
                        <Td color='gray.500' borderColor={borderColor}>{product.product_freshness}</Td>
                        <Td color='gray.500' borderColor={borderColor}>{product.harvest_date}</Td>
                        <Td color='gray.500' borderColor={borderColor}>{product.exp_date}</Td>
                        <Td>
                          <Flex>
                            <Link to={`/edit-product/${product.id}`}>
                              <Button colorScheme="blue" size="sm" mr={2}>Edit</Button>
                            </Link>
                            <Button colorScheme="red" size="sm" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
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
