import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
} from "@chakra-ui/react";
import React from "react";
import MessageSignleTab from "./MessageSingleTab";

const MessageTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab
          bg="#bfbdbd"
          rounded="md"
          width="48"
          mr="4"
          _selected={{ color: "#5b48c7", bg: "white" }}
        >
          Risk 1
        </Tab>
        <Tab
          bg="#bfbdbd"
          rounded="md"
          width="48"
          mr="4"
          _selected={{ color: "#5b48c7", bg: "white" }}
        >
          Risk 2
        </Tab>
        <Tab
          bg="#bfbdbd"
          rounded="md"
          width="48"
          mr="4"
          _selected={{ color: "#5b48c7", bg: "white" }}
        >
          Risk 3
        </Tab>
      </TabList>

      <TabPanels>
        <MessageSignleTab></MessageSignleTab>
        <MessageSignleTab></MessageSignleTab>
        <MessageSignleTab></MessageSignleTab>
      </TabPanels>
    </Tabs>
  );
};

export default MessageTab;
