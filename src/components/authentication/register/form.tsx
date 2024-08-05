import { Box, Flex } from "@chakra-ui/react";
import HeaderForm from "../headerForm";

export default function FormLogin() {
  return (
    <>
      <Flex p="20" justify="start" background="green">
        <Box width="35%">
          <HeaderForm />
          {/* <Form /> */}
        </Box>
      </Flex>
    </>
  );
}
