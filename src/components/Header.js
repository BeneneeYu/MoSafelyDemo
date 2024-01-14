import React from "react";
import { Box, Flex, Avatar, Image, Spacer } from "@chakra-ui/react";
import logo from "../logo.png";
import avatar from "../useravatar.png";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <HamburgerIcon boxSize={12} />
      </Box>
      <Box p="1">
        <Image mt="2" src={logo} alt="logo" objectFit="cover" />
      </Box>
      <Spacer />
      <Box flex="1" align="right" p="2">
        <Avatar src={avatar} />
        <ChevronDownIcon boxSize={12} /> {/* Adjusted margin for spacing */}
      </Box>
    </Flex>
  );
};

export default Header;
