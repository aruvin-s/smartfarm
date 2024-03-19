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
import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from '../supabaseClient.js';

export default function WeatherWeekly() {
const iconBlue = useColorModeValue("green.500", "green.500");
const iconBoxInside = useColorModeValue("white", "white");
const textColor = useColorModeValue("gray.700", "white");
const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
const borderColor = useColorModeValue("gray.200", "gray.600");
const textTableColor = useColorModeValue("gray.500", "white");

const [weatherData, setWeatherData] = useState(null);

const [weathers, setWeathers] = useState([]);

const { bulan } = useParams();

useEffect(() => {
  const fetchData = async () => {
    const params = {
      latitude: -8.65,
      longitude: 115.2167,
      current: ["temperature_2m", "relative_humidity_2m", "wind_speed_10m"],
      timezone: "auto",
      forecast_days: 1
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current();

    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0).value(),
        relativeHumidity2m: current.variables(1).value(),
        windSpeed10m: current.variables(2).value(),
      }
    };

    setWeatherData(weatherData);
  };

  fetchData();
}, []);

useEffect(() => {
  getWeathers();
}, []);

async function getWeathers() {
  try {
    const { data, error } = await supabase.from(`denpasar-${bulan}`).select();
    if (error) {
      throw error;
    }

    setWeathers(data);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
  }
}

return (
  <Flex width="100%">
    <Flex direction="column" ml={300} width="100%">
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
                      SUHU SAAT INI
                    </StatLabel>
                    <Flex>
                    {weatherData && weatherData.current && (
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          {weatherData.current.temperature2m.toFixed(1)} celcius
                        </StatNumber>
                      )}
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
                      KELEMBAPAN UDARA
                    </StatLabel>
                    <Flex>
                    {weatherData && weatherData.current && (
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          {weatherData.current.relativeHumidity2m}%
                        </StatNumber>
                      )}
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
                      KECEPATAN ANGIN
                    </StatLabel>
                    <Flex>
                    {weatherData && weatherData.current && (
                        <StatNumber
                          fontSize="lg"
                          color={textColor}
                          fontWeight="bold"
                        >
                          {weatherData.current.windSpeed10m.toFixed(1)} Km/h
                        </StatNumber>
                      )}
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
      <Flex width="100%" justifyContent="space-between">
      <Card p='0px' >
        <Flex direction='column'>
          <Flex align='center' justify='space-between' p='22px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Ramalan Cuaca Bulanan / {bulan} 2024
            </Text>
            <Select placeholder='Denpasar' height='41px' width='186px' fontSize='14px' bg='white'>
            <option value='option1'>Denpasar</option>
            <option value='option2'>Gianyar</option>
          </Select>
          </Flex>
          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
          <Table>
          <Thead>
                <Tr bg={tableRowColor}>
                  <Th color='gray.400' borderColor={borderColor}>
                    BULAN
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    WILAYAH
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    SUHU
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    CURAH HUJAN
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    KELEMBAPAN UDARA
                  </Th>
                  <Th color='gray.400' borderColor={borderColor}>
                    PERISTIWA CUACA
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
              {weathers.length > 0 ? (
                weathers.map((weather) => (
                <Tr key="id">
                <Td color='gray.500' borderColor={borderColor}>
                <Link>
                  {weather.minggu}
                  </Link>
                </Td>
                <Td color='gray.500' borderColor={borderColor}>
                  {weather.wilayah}
                </Td>
                <Td color='gray.500' borderColor={borderColor}>
                  {weather.suhu}
                </Td>
                <Td color='gray.500' borderColor={borderColor}>
                  {weather.curah_hujan}
                </Td>
                <Td color='gray.500' borderColor={borderColor}>
                  {weather.kelembapan_udara}
                </Td>
                <Td color='gray.500' borderColor={borderColor}>
                  {weather.peristiwa_cuaca}
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