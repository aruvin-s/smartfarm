import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { MaterialSymbol } from 'react-material-symbols';
// chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Tooltip
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import {
  DashboardLogo,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "../Icons/Icons.jsx";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
  renderTrackRTL,
  renderView,
  renderViewRTL
} from "../Scrollbar/Scrollbar.jsx";
import { HSeparator } from "../Separator/Separator";
import { SidebarHelp } from "./SidebarHelp";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import sidebarLogo from "../../assets/logoSidebar.png";

const SidebarAlt = () => {

  const [menuItems, setMenuItems] = useState([
    { name: "Dashboard", icon: "CartIcon" },
    { name: "Produk", icon: "HamburgerIcon" },
    { name: "Pengaturan", icon: "HamburgerIcon" },
    { name: "Penyimpanan", icon: "HamburgerIcon" },
    { name: "Cuaca", icon: "HamburgerIcon" }
  ]);

  let variantChange = "0.2s linear";
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarRadius = "20px";
  let sidebarMargins = "0px";
  var brand = (
    <Box pt={"25px"}>
      <Box mx="auto" width="100px">
        <img src={sidebarLogo} alt="Sidebar Logo" style={{ width: "100%", height: "auto" }} />
      </Box>
      <HSeparator my="26px" />
    </Box>
  );


  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" bottom="0">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="260px"
        maxW="260px"
        ms={{
          sm: "16px",
        }}
        my={{
          sm: "16px",
        }}
        h="calc(100vh - 32px)"
        ps="20px"
        pe="20px"
        m={sidebarMargins}
        filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
        borderRadius={sidebarRadius}
        display="flex"
        flexDirection="column"
        alignItems="center" // Center items horizontally
        justifyContent="space-between" // Align items evenly along the vertical axis
      >
        <Scrollbars
          autoHide
          renderTrackVertical={
            document.documentElement.dir === "rtl"
              ? renderTrackRTL
              : renderTrack
          }
          renderThumbVertical={useColorModeValue(
            renderThumbLight,
            renderThumbDark
          )}
          renderView={
            document.documentElement.dir === "rtl"
              ? renderViewRTL
              : renderView
          }
        >
          <Box>{brand}</Box>
          <Stack direction="column" mb="40px">
          <Box>
          <Link to="/dashboard">
              <Button
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg="transparent"
                  mb={{ xl: "6px" }}
                  mx={{ xl: "auto" }}
                  py="12px"
                  ps={{ sm: "10px", xl: "16px" }}
                  borderRadius="15px"
                  _hover="none"
                  w="100%"
                  _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex>
                      <IconBox bg="green.500" color="white" h="30px" w="30px" me="12px">
                      <MaterialSymbol icon="grid_view" size={20} fill  color='white' />
                      </IconBox>
                    <Text color={useColorModeValue("gray.400", "white")} my="auto" fontSize="sm">
                      Dashboard
                    </Text>
                  </Flex>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to="/product-list">
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mb={{ xl: "6px" }}
                    mx={{ xl: "auto" }}
                    py="12px"
                    ps={{ sm: "10px", xl: "16px" }}
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <Flex>
                        <IconBox bg="green.500" color="white" h="30px" w="30px" me="12px">
                        <MaterialSymbol icon="nutrition" size={20} fill  color='white' />
                        </IconBox>
                      <Text color={useColorModeValue("gray.400", "white")} my="auto" fontSize="sm">
                        Produk
                      </Text>
                    </Flex>
                  </Button>
              </Link>
            </Box>
            <Box>
            <Link to="/setting">
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mb={{ xl: "6px" }}
                    mx={{ xl: "auto" }}
                    py="12px"
                    ps={{ sm: "10px", xl: "16px" }}
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <Flex>
                        <IconBox bg="green.500" color="white" h="30px" w="30px" me="12px">
                        <MaterialSymbol icon="settings" size={20} fill  color='white' />
                        </IconBox>
                      <Text color={useColorModeValue("gray.400", "white")} my="auto" fontSize="sm">
                        Pengaturan
                      </Text>
                    </Flex>
                  </Button>
              </Link>
            </Box>
            <Box >
              <Link to="/inventory">
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mb={{ xl: "6px" }}
                    mx={{ xl: "auto" }}
                    py="12px"
                    ps={{ sm: "10px", xl: "16px" }}
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <Flex>
                        <IconBox bg="green.500" color="white" h="30px" w="30px" me="12px">
                        <MaterialSymbol icon="inventory_2" size={20} fill  color='white' />
                        </IconBox>
                      <Text color={useColorModeValue("gray.400", "white")} my="auto" fontSize="sm">
                        Penyimpanan
                      </Text>
                    </Flex>
                  </Button>
              </Link>
            </Box>
            <Box>
            <Link to="/weather">
              <Button
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg="transparent"
                  mb={{ xl: "6px" }}
                  mx={{ xl: "auto" }}
                  py="12px"
                  ps={{ sm: "10px", xl: "16px" }}
                  borderRadius="15px"
                  _hover="none"
                  w="100%"
                  _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex>
                      <IconBox bg="green.500" color="white" h="30px" w="30px" me="12px">
                      <MaterialSymbol icon="clear_day" size={20} fill  color='white' />
                      </IconBox>
                    <Text color={useColorModeValue("gray.400", "white")} my="auto" fontSize="sm">
                      Cuaca
                    </Text>
                  </Flex>
                </Button>
            </Link>
            </Box>
          </Stack>
          <Box width="100%" textAlign="center" > {/* Container for the button */}
          <Link to="/">
            <Button variant='danger' maxH='30px' w="80%" mt="160px">
                Keluar
              </Button>
          </Link>
          </Box>
        </Scrollbars>
      </Box>
    </Box>
  );
};

export default SidebarAlt;