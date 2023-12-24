import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Heading,
  Center,
  VStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Cards(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ability, setAbility] = useState("");
  const [name, setName] = useState("");

  const index = props.url.split("/").filter(Boolean).pop();

  const handleOnClick = () => {
    fetchData();
    onOpen();
  };

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    const result = await response.json();
    console.log(result);
    setAbility(result.stats);
    setName(result.forms[0].name);
  };

  const imgURL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index}.svg`;

  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <Card
      height={"40%"}
      width={["100%", "40%"]}
      overflow={"hidden"}
      cursor={"pointer"}
      onClick={handleOnClick}
      backgroundColor={"#30A7D7"}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader fontWeight={"150px"} color={"orangered"}>
              {name.toUpperCase()}
            </ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"row"} gap={8}>
            <VStack>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"red"}
              >
                {ability ? ability[0].stat.name : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"green"}
              >
                {ability ? ability[1].stat.name : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"blue"}
              >
                {ability ? ability[2].stat.name : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"magenta"}
              >
                {ability ? ability[3].stat.name : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"aqua"}
              >
                {ability ? ability[4].stat.name : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                fontSize={"16px"}
                color={"salmon"}
              >
                {ability ? ability[5].stat.name : ""}
              </Text>
            </VStack>
            <VStack>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"red"}
              >
                {ability ? ability[0].base_stat : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"green"}
              >
                {ability ? ability[1].base_stat : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"blue"}
              >
                {ability ? ability[2].base_stat : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"magenta"}
              >
                {ability ? ability[3].base_stat : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"aqua"}
              >
                {ability ? ability[4].base_stat : ""}
              </Text>
              <Text
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"10%"}
                color={"salmon"}
              >
                {ability ? ability[5].base_stat : ""}
              </Text>
            </VStack>
            <VStack gap={5} marginTop={2}>
              <Progress
                value={ability ? ability[1].base_stat : 0}
                width={"200px"}
                colorScheme={"red"}
                borderRadius={"full"}
              />
              <Progress
                value={ability ? ability[1].base_stat : 0}
                width={"200px"}
                colorScheme={"green"}
                borderRadius={"full"}
              />
              <Progress
                value={ability ? ability[2].base_stat : 0}
                width={"200px"}
                colorScheme={"blue"}
                borderRadius={"full"}
              />
              <Progress
                value={ability ? ability[3].base_stat : 0}
                width={"200px"}
                colorScheme={"red"}
                borderRadius={"full"}
              />
              <Progress
                value={ability ? ability[4].base_stat : 0}
                width={"200px"}
                colorScheme={"green"}
                borderRadius={"full"}
              />
              <Progress
                value={ability ? ability[5].base_stat : 0}
                width={"200px"}
                colorScheme={"blue"}
                borderRadius={"full"}
              />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <CardBody>
        <Center>
          <Image
            src={imgURL}
            width={"200px"}
            height={"200px"}
            objectFit={"fill"}
          ></Image>
        </Center>
      </CardBody>
      <CardFooter display={"flex"} flexDirection={"column"}>
        <Heading
          textAlign={"center"}
          fontSize={["15px", "25px"]}
          color={"#F5F5F5"}
        >
          {capitalizedName}
        </Heading>
      </CardFooter>
    </Card>
  );
}
