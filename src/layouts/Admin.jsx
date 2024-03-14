import { useState } from "react";
import { Outlet } from "react-router";
import {
    Box,
    Flex,
  } from "@chakra-ui/react";
import routes from "../routes.js";
import Sidebar from "../components/Sidebar/SidebarAlt.jsx";
import AddProduct from "../pages/AddProduct.jsx";

const Admin = () => {

  return (
    <Flex>
      <Box width="100%" >
        <Box
          minH='40vh'
          w='100%'
          position='absolute'
          bgColor="#38A169"
          bgSize='cover'
          top='0'
          align="center"
        />
        <Sidebar/>
        <Flex my="16px" me="16px">
          <AddProduct />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Admin;