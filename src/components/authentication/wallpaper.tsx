import gradientStyle from "@/css/global/css-global";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Wallpaper({ children }: Props) {
  return (
    <Flex
      width="100%"
      height="100vh"
      style={gradientStyle}
      align="center"
      justify="center"
    >
      <Box
        background="rgba(60, 60, 60, 0.6)"
        width="90%"
        height="90vh"
        borderRadius="25px"
        p="10"
      >
        {children}
      </Box>
    </Flex>
  );
}
