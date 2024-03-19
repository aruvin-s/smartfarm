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
    InputRightAddon,
  } from "@chakra-ui/react";
import Card from "../components/Card/Card.jsx";
import React, { useState, useEffect } from "react";
import supabase from '../supabaseClient.js';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [expDate, setExpDate] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productDetails, setProductDetails] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [productLogs, setProductLogs] = useState('');
  const [productFreshness, setProductFreshness] = useState('');


  async function uploadImage(file, fileName) {

  
    const { data, error } = await supabase
        .storage
        .from('image')
        .upload(fileName, file);

    if (error) {
        console.log(error);
    } else {
        console.log("Image added successfully");
    }
}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    
    // Read the image file and set it as the preview
    const reader = new FileReader();
    reader.onload = () => {
        setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!productImage) {
        console.error('Please select an image');
        return;
    }

    if (expDate - 10 == harvestDate) {
      setProductFreshness("Tidak Segar")
    } else {
      setProductFreshness("Segar")
    }

    if (productWeight < 50) {
      setProductLogs("Stok Rendah")
    } else {
      setProductLogs("Ditambahkan")
    }

    const fileName = uuidv4();

    // Upload image before inserting product
    await uploadImage(productImage, fileName);

    const { data, error } = await supabase.from('farmproducts').insert([
        {
            product_name: productName,
            product_category: productCategory,
            product_weight: productWeight,
            harvest_date: harvestDate,
            exp_date: expDate,
            product_image: fileName, // Using the actual file name here
            product_desc: productDetails,
            product_logs: productLogs,
            product_freshness: productFreshness
        }
    ]);

    if (error) {
        console.error('Error adding product:', error.message);
    } else {
        console.log('Product added successfully:', data);
        setProductName('');
        setProductCategory('');
        setProductWeight('');
        setHarvestDate('');
        setExpDate('');
        setProductImage(null); // Reset image state
        setProductDetails('');
        setImagePreview(null);
    }
};


  return (
    <Flex width="100%" height="100%">
      <Flex direction="column" ml={300} width="100%">
        <Flex width="100%" height="100%" justifyContent="space-between">
        <Card p='0px' borderRadius="20px" bg="white">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px' >
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                      <Box width="43%" height="200px" mb="48px">
                        <Flex>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal" w="50%">
                                    Gambar Produk
                          </FormLabel>
                          <Input
                              border="0px solid"
                              onChange={handleImageChange}
                              fontSize="sm"
                              type="file"
                              />
                        </Flex>
                          <Flex border="1px solid" borderColor="gray.200" borderRadius="md" w="100%" h="100%">
                          {imagePreview && <img src={imagePreview} alt="Preview" style={{objectFit: 'cover',  width: '100%', height: '100%' }} />}
                          </Flex>
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
                      Tambah Produk
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