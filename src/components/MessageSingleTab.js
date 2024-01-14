import ChatBox from "./ChatBox";
import MessageCardColumn from "./MessageCardColumn";
import React, { useState } from "react";
import MessageProgressBar from "./MessageProgressBar";
import {
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";

const MessageSignleTab = () => {
  const [progressValue, setProgressValue] = useState(0);

  const handleButtonClick = () => {
    // Increment the progress value by 1 when a Circle button is selected
    setProgressValue((prevValue) => prevValue + 1);
  };

  return (
    <TabPanel>
      <Box>
        <Flex direction="row" mb={5}>
          <Box flex="3.5">
            <MessageCardColumn onRadioClick={handleButtonClick} />
          </Box>

          <Box flex="6.5">
            <ChatBox></ChatBox>
          </Box>
        </Flex>
        <Box
          p={2} // Padding
          borderRadius="md" // Optional: Add border radius for rounded corners
        >
          {progressValue}/5 Complete
        </Box>
        <MessageProgressBar
          progressValue={progressValue * 20}
        ></MessageProgressBar>
      </Box>
    </TabPanel>
  );
};

export default MessageSignleTab;
