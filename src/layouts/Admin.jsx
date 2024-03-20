import {
    Box,
    Flex,
  } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar/SidebarAlt.jsx";

const Admin = ({children}) => {

  return (
    <Flex bg="#F7FAC">
      <Box width="100%" height="100%">
        <Box
          minH='40vh'
          w='100%'
          position='absolute'
          bgColor="#38A169"
          bgSize='cover'
          top='0'
          align="center"
          zIndex='-1'
        />
        <Sidebar />
        <Flex my="16px" me="16px">
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Admin;