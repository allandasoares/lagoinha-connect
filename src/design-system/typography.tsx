import { Text } from "@chakra-ui/react";

interface Props {
  type: "title" | "subtitle";
  text: string;
}

export function TypographyDS({ type, text }: Props) {
  if (type === "title")
    return (
      <>
        <Text color="white">{text}</Text>
      </>
    );
  if (type === "subtitle")
    return (
      <>
        <Text color="white" fontSize="small">
          {text}
        </Text>
      </>
    );
}
