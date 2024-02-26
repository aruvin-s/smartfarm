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

export default function Dashboard() {
  const iconBlue = useColorModeValue("green.500", "green.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();

  return (
    <Flex>
      <Sidebar />
      <Flex direction="column" ml={300}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, xl: 3 }}
          spacing="24px"
          mb="20px"
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
                    Todays Money
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      $53,897
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
                Since last month
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
                    Todays Users
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      $3,200
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
                  <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="green.400" fontWeight="bold">
                  +5.2%{" "}
                </Text>
                Since last month
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
                    New Clients
                  </StatLabel>
                  <Flex>
                    <StatNumber
                      fontSize="lg"
                      color={textColor}
                      fontWeight="bold"
                    >
                      +2,503
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
                  <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
              <Text color="gray.400" fontSize="sm">
                <Text as="span" color="red.500" fontWeight="bold">
                  -2.82%{" "}
                </Text>
                Since last month
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Page visits
              </Text>
              <Button variant='primary' maxH='30px'>
                SEE ALL
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.400' borderColor={borderColor}>
                      Page name
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Visitors
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Unique users
                    </Th>
                    <Th color='gray.400' borderColor={borderColor}>
                      Bounce rate
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Td color='gray.400' borderColor={borderColor}>
                  lorem ipsum
                  </Td>
                  <Td color='gray.400' borderColor={borderColor}>
                  lorem ipsum
                  </Td>
                  <Td color='gray.400' borderColor={borderColor}>
                  lorem ipsum
                  </Td>
                  <Td color='gray.400' borderColor={borderColor}>
                  lorem ipsum
                  </Td>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}