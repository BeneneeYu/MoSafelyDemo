import { Flex } from "@chakra-ui/react";
import MessageCard from "./MessageCard";

function MessageCardColumn({ onRadioClick }) {
  return (
    <Flex
      direction="column"
      h="100%"
      maxH="600px" // Set the maximum height as needed
      overflowY="auto" // Enable vertical scrolling
      border="1px solid #ddd" // Optional: Add border for visual separation
    >
      <MessageCard onRadioClick={onRadioClick}></MessageCard>
      <MessageCard onRadioClick={onRadioClick}></MessageCard>
      <MessageCard onRadioClick={onRadioClick}></MessageCard>
      <MessageCard onRadioClick={onRadioClick}></MessageCard>
      <MessageCard onRadioClick={onRadioClick}></MessageCard>
    </Flex>
  );
}

export default MessageCardColumn;
