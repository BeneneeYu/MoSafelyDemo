import React from 'react';
import {Progress, ProgressLabel } from "@chakra-ui/react";

const MessageProgressBar = ({ progressValue }) => {
  return (

    <Progress
      value={progressValue}
      colorScheme="purple"
      height='6'
      isIndeterminate={false} // Set to true if you want an indeterminate (animated) progress bar
      hasStripe
      isAnimated
    ><ProgressLabel fontSize='18' color={'black'}> {`${progressValue}%`}</ProgressLabel></Progress>
  );
};

export default MessageProgressBar;