import React from "react";
import MessageTab from "./MessageTab";
import PaginationButtons from "./PaginationButtons";

import { Box, Heading } from "@chakra-ui/react";
const MessageBox = () => {

  return (
    <Box ml="20" mr="28" mt="1" height={400}>
      <Heading mb="2" textAlign="left">
        Messages Type
      </Heading>
      <MessageTab></MessageTab>
      <PaginationButtons></PaginationButtons>
    </Box>
  );
};

export default MessageBox;
