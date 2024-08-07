import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
}

export default function HeaderForm(props: Props) {
  const { title, subtitle } = props;
  return (
    <>
      <Box lineHeight="normal">
        <Text color="white" fontWeight="bold" fontSize="5xl">
          {title}
        </Text>
        <Text color="white" fontSize="lg">
          {subtitle}
        </Text>
      </Box>
    </>
  );
}
