import { Flex, Button, useToast } from "@chakra-ui/react";

const PaginationButtons = () => {
  const toast = useToast()
  return (
    <Flex justify="flex-end" mt="4" gap={4}>
      <Button mr="2" size="lg" bgColor="#868687" 
      onClick={() =>
        toast({
          title: 'You clicked Previous',
          description: "You clicked Previous",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
      }
      >
        Previous
      </Button>
      <Button mr="2" size="lg" bgColor="#868687"
      onClick={() =>
        toast({
          title: 'You clicked Next',
          description: "You clicked Next",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
      }
      >
        Next
      </Button>
    </Flex>
  );
};

export default PaginationButtons;
