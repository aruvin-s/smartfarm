import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Select,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    InputGroup,
    InputRightAddon
  } from "@chakra-ui/react";
import Card from "../components/Card/Card.jsx";
import React, { useState, useEffect } from "react";
import supabase from '../supabaseClient.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddProduct() {
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [expDate, setExpDate] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDetails, setProductDetails] = useState('');

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProducts(id);
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
   const { data, error } = await supabase.from('farmproducts')
        .update({
            product_name: productName,
            product_category: productCategory,
            product_weight: productWeight,
            harvest_date: harvestDate,
            exp_date: expDate,
            product_image: null, // You might want to handle image update separately
            product_desc: productDetails
        })
        .eq('id', id);

    if (error) {
        console.error('Error updating product:', error.message);
    } else {
        console.log('Product updated successfully:', data);
        // Reset form fields after successful submission
        setProductName('');
        setProductCategory('');
        setProductWeight('');
        setHarvestDate('');
        setExpDate('');
        setProductImage('');
        setProductDetails('');
        getProducts(id);
    }
};

  async function getProducts(id) {
  try {
    const { data, error } = await supabase
      .from("farmproducts")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) {
      throw error;
    }
    
    if (data) {
      setProductName(data.product_name);
      setProductCategory(data.product_category);
      setProductWeight(data.product_weight);
      setHarvestDate(data.harvest_date);
      setExpDate(data.exp_date);
      setProductDetails(data.product_desc);
      setLoading(false); // Data fetching is complete
      console.log(data);
    } else {
      console.log("No data found for id:", id);
    }
  } catch (error) {
    console.error("Error fetching product:", error.message);
    setLoading(false); // Set loading to false in case of error
  }
}


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex width="100%" height="100%">
      <Flex direction="column" ml={300} width="100%">
        <Flex width="100%" height="100%" justifyContent="space-between">
        <Card p='0px' borderRadius="20px" bg="white">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px' >
            <form onSubmit={handleUpdate} style={{ width: '100%' }}>
              <FormControl>
                  <SimpleGrid columns={2} spacing={2}>
                      <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                          Nama Produk
                          </FormLabel>
                          <Input
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          fontSize="sm"
                          ms="4px"
                          type="text"
                          placeholder="Masukkan nama produk disini"
                          mb="24px"
                          size="lg"
                          />
                      </Box>
                      <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                              Kategori
                          </FormLabel>
                          <Select placeholder='Pilih Kategori Produk' fontSize='14px' bg='white' size="lg" ms="4px"
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                          >
                              <option value='Sayur'>Sayur</option>
                              <option value='Buah'>Buah</option>
                          </Select>
                      </Box>
                      <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                          Tanggal Panen
                          </FormLabel>
                          <Input
                          value={harvestDate}
                          onChange={(e) => setHarvestDate(e.target.value)}
                          fontSize="sm"
                          ms="4px"
                          type="date"
                          placeholder="Pilih Tanggal Kadaluwarsa"
                          mb="24px"
                          size="lg"
                          />
                      </Box>
                      <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                          Tanggal Kadaluwarsa
                          </FormLabel>
                          <Input
                          value={expDate}
                          onChange={(e) => setExpDate(e.target.value)}
                          fontSize="sm"
                          ms="4px"
                          type="date"
                          placeholder="Pilih Tanggal Kadaluwarsa"
                          mb="24px"
                          size="lg"
                          />
                      </Box>
                      <Box>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                          Berat Produk
                          </FormLabel>
                          <InputGroup size="lg">
                            <Input
                            value={productWeight}
                            onChange={(e) => setProductWeight(e.target.value)}
                            fontSize="sm"
                            ms="4px"
                            type="number"
                            placeholder="1"
                            mb="24px"
                            />
                            <InputRightAddon>KG</InputRightAddon>
                          </InputGroup>
                      </Box>
                  </SimpleGrid>
                  <Flex justifyContent="space-between" mb={4}>
                      <Box width="43%" mb="32px">
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                  Gambar Produk
                          </FormLabel>
                            <Input
                            height="100%"
                            fontSize="sm"
                            type="file"
                            p="64px"
                            />
                      </Box>
                      <Box width="55%" mb="32px">
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                              Detail Produk
                              </FormLabel>
                              <Textarea
                              value={productDetails}
                              onChange={(e) => setProductDetails(e.target.value)}
                              height="100%"
                              placeholder="Tuliskan detail produk disini"
                              />
                      </Box>
                  </Flex>
                  <SimpleGrid columns={2} spacing={2} width="50%">
                      <Button
                      type="submit"
                      fontSize="10px"
                      bgColor="green.500"
                      color="white"
                      fontWeight="bold"
                      w="100%"
                      h="45"
                      mb="24px"
                      >
                      Ubah Produk
                      </Button>
                      <Link to="/product-list">
                        <Button
                        fontSize="10px"
                        variant="dark"
                        fontWeight="bold"
                        w="100%"
                        h="45"
                        mb="24px"
                        >
                        Batal
                        </Button>
                      </Link>
                  </SimpleGrid>
              </FormControl>
            </form>
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