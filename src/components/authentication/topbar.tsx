import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { InformationBox } from "./informationBox";

export default function TopBar() {
  return (
    <>
      <Flex width="100%" height="10vh" justifyContent="space-between">
        <Box display="flex" p="4">
          <Image src="/images/logo.png" />
        </Box>
        <InformationBox />
      </Flex>
    </>
  );
}
