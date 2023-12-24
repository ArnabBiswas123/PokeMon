import React, { useState } from "react";
import {
  IconButton,
  Center,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";
import Cards from "./Cards";
import { SearchIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function PokeDox() {
  const [data, setData] = useState();
  const [dataSearch, setDataSearch] = useState();
  const [search, setSearch] = useState();
  const [select, setSelect] = useState("Normal");
  const searchRef = useRef(null);
  const toast = useToast();

  const handleSearch = () => {
    setSearch(searchRef.current);
    const searchType = isNaN(searchRef.current) ? "name" : "id";
    if (searchType === "name") {
      const results = dataSearch.filter((item) =>
        item.name.includes(searchRef.current.toLowerCase())
      );
      if (results.length === 0) {
        toast({
          title: "No such data",
          position: "top",
          description: "Enter valid search",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      setData(results);
    } else {
      const results = dataSearch.filter((item) => {
        const index = item.url.split("/").filter(Boolean).pop();
        return index === searchRef.current;
      });
      if (results.length === 0) {
        toast({
          title: "No such data",
          position: "top",
          description: "Enter valid search",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      setData(results);
    }
  };

  const fetchdata = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"
    );
    const result = await response.json();

    setData(result.results);
    setDataSearch(result.results);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleChange = (value) => {
    searchRef.current = value;
  };

  const handleSelect = async (e) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${e.target.value}`
    );
    const results = await response.json();
    const transformedArray = results.pokemon.map((item) => ({
      name: item.pokemon.name,
      url: item.pokemon.url,
    }));
    setData(transformedArray);
  };

  return (
    <Center display={"flex"} flexDirection={"column"}>
      <Text fontSize={"40px"} color={"white"} mb={5} fontFamily={"inherit"}>
        PokeDox
      </Text>
      <Center
        display={"flex"}
        flexDirection={"row"}
        width={"90%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        mb={10}
      >
        <InputGroup width={"60%"} borderColor={"blue"}>
          <InputLeftElement>
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              onClick={handleSearch}
              height={"2%"}
            />
          </InputLeftElement>
          <Input
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            backgroundColor={"#F5F5F5"}
            focusBorderColor="white"
            placeholder="search by id or name"
          ></Input>
        </InputGroup>
        <Select
          // value={select}
          width={"20%"}
          onChange={handleSelect}
          backgroundColor={"#F5F5F5"}
          focusBorderColor="white"
        >
          <option value={"normal"}>Normal</option>
          <option value={"fire"}>Fire</option>
          <option value={"water"}>Water</option>
          <option value={"electric"}>Electric</option>
          <option value={"grass"}>Grass</option>
          <option value={"ice"}>Ice</option>
          <option value={"fighting"}>Fighting</option>
          <option value={"poison"}>Poison</option>
          <option value={"ground"}>Ground</option>
          <option value={"psychic"}>Psychic</option>
          <option value={"flying"}>Flying</option>
          <option value={"bug"}>Bug</option>
          <option value={"rock"}>Rock</option>
          <option value={"ghost"}>Ghost</option>
          <option value={"dark"}>Dark</option>
          <option value={"steel"}>Steel</option>
          <option value={"fairy"}>Fairy</option>
          <option value={"dragon"}>Dragon</option>
        </Select>
      </Center>
      <Center
        display={"flex"}
        flexWrap={"wrap"}
        gap={2}
        width={"80%"}
        overflow={"hidden"}
      >
        {data
          ? data.map((item) => {
              return <Cards name={item.name} url={item.url}></Cards>;
            })
          : ""}
      </Center>
    </Center>
  );
}
