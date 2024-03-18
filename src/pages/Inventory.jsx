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

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  const { colorMode } = useColorMode();

  const data = {
    categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Des"],
    series: [ [30, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 100], [30, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 100] ]
  };

  const data2 = {
    categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Des"],
    series: [30, 40, 45, 50, 49, 60, 70, 91, 60, 70, 91, 100]
  };

  const data3 = {
    categories: ["Apel", "Padi", "Kentang", "Sawi"],
    series: [30, 40, 45, 50]
  };

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
                        color="gray.400"
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
                          250 items
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
                  <Text color="gray.400" fontSize="sm">
                    <Text as="span" color="green.400" fontWeight="bold">
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
                        color="gray.400"
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
                          250 items
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
                  <Text color="gray.400" fontSize="sm">
                    <Text as="span" color="green.400" fontWeight="bold">
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
                        color="gray.400"
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
                          25 items
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
                  <Text color="gray.400" fontSize="sm">
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
                        Produk Berdasarkan Kategori
                    </Text>
                </Flex>
                    <HorizontalChart data={data3} />
                </Flex>
              </Card>
              <Card minH="410px">
              <Flex direction="column" align="center">
                <Flex width="100%">
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Produk Kadaluwarsa
                    </Text>
                </Flex>
                    <HorizontalChart data={data3} />
                </Flex>
              </Card>
              <Card minH="410px">
              <Flex direction="column" align="center">
                <Flex width="100%">
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Produk Stok Rendah
                    </Text>
                </Flex>
                    <HorizontalChart data={data3} />
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
                    <BarChart data={data} />
                </Flex>
              </Card>
              <Card minH="410px">
                <Flex direction="column" align="center">
                <Flex width="100%" mb={10}>
                   <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        Ringkasan Produk
                    </Text>
                </Flex>
                    <BarChart data={data2} />
                </Flex>
              </Card>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}