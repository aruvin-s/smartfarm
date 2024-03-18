import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import supabase from '../supabaseClient.js';

function TestDB() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <Flex width="100%">
    <Flex direction="column" ml={300} width="100%">
      {countries.length > 0 ? (
        countries.map((country) => (
          <Text fontSize='lg' color='red' fontWeight='bold' key={country.name}>{country.name}</Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </Flex>
  </Flex>
  );
}

export default TestDB;
