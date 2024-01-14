import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
const UserBox = ({ username }) => {
  return (
    <Box p={2} mb={2} ml={2} textAlign="left" borderBottom="1px solid #ccc">
      <Text fontWeight="bold" color="black" m={2} mb={4}>
        {username}
      </Text>
    </Box>
  );
};

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "other",
      username: "Luis Rivera",
    },
    {
      id: 2,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "user",
      username: "Natalia",
    },
    {
      id: 3,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "other",
      username: "Luis Rivera",
    },
    {
      id: 4,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "user",
      username: "Natalia",
    },
    {
      id: 5,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "other",
      username: "Luis Rivera",
    },
    {
      id: 6,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "user",
      username: "user",
    },
    {
      id: 7,
      text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
      sender: "other",
      username: "Luis Rivera",
    },
  ]);

  return (
    <Box
      p={4}
      h="100%"
      maxH="600px" // Set the maximum height as needed
      overflowY="auto"
    >
      <Flex direction="column" mb={2}>
        <UserBox username={messages[0]?.username} />
      </Flex>

      <Flex justify="flex-end">
        <QuestionOutlineIcon boxSize={6} />
      </Flex>

      <Flex direction="column" h="100%">
        {messages.map((message) => (
          <Flex
            key={message.id}
            mb={2}
            direction="column"
            alignItems={message.sender === "user" ? "flex-end" : "flex-start"}
          >
            <Box fontSize="sm" color="gray.500" mb={1}>
              {message.username}
            </Box>

            <Box
              p={2}
              borderRadius="md"
              bgColor={message.id === 4 ? "pink" : "white"}
              color={"#5b48c7"}
              border="1px solid #5b48c7"
              maxW="60%"
              wordBreak="break-word"
            >
              {message.text}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default ChatBox;
