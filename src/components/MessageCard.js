import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

const CircleButton = ({ label, isSelected, onClick }) => {
  return (
    <Button
      size="sm"
      ml={2}
      variant="outline"
      borderRadius="full"
      borderWidth={isSelected ? "2px" : "1px"}
      borderColor={isSelected ? "blue.500" : "gray.300"}
      color={isSelected ? "white" : "gray.500"}
      bgColor={isSelected ? "#5b48c7" : "white"}
      _hover={{ borderColor: "blue.500", color: "blue.500" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

const MessageCard = ({ onRadioClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    if (null == selectedButton) onRadioClick();
    setSelectedButton(button);
  };
  return (
    <Box
      p={4}
      border="1px solid #ccc"
      borderRadius="md"
      width="90%"
      margin="auto"
      bg={isSelected ? "gray.200" : "white"} // Change background color based on selection
      mb={2}
      mt={2}
    >
      {/* First Row */}
      <Flex alignItems="center" mb={4}>
        {/* Avatar */}
        <Avatar
          size="md"
          name="John Doe"
          src="https://placekitten.com/100/100"
        />

        {/* User Name */}
        <Text ml={3}>christinasterling</Text>
        <Flex>
          <CircleButton
            label="Agree"
            isSelected={selectedButton === "Agree"}
            onClick={() => handleButtonClick("Agree")}
          />
          <CircleButton
            label="Disagree"
            isSelected={selectedButton === "Disagree"}
            onClick={() => handleButtonClick("Disagree")}
          />
        </Flex>
      </Flex>
      <Link onClick={handleClick} cursor="pointer">
        <Box color={"#5b48c7"} border="1px solid #5b48c7" borderRadius="lg">
          <Text m={1}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default MessageCard;
