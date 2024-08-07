import { Input } from "@chakra-ui/react";

interface Props {
  placeholder?: string;
  type?:
    | "number"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "switch"
    | "pin"
    | "slider"
    | "range-slider"
    | "editable"
    | "password";
  typeInput: "form" | "search" | "button";
  variant?: "solid" | "outline" | "filled" | "flushed" | "unstyled";
  color?: string;
  background?: string;
}

export function InputDS(props: Props) {
  const { typeInput, placeholder, type, color, variant, background } = props;

  if (typeInput === "form")
    return (
      <>
        <Input
          type={type ? type : "textarea"}
          placeholder={placeholder ? placeholder : ""}
          borderRadius="30"
          background={background ? background : "#030303"}
          opacity="0.8"
          variant={variant ? variant : "solid"}
          color={color ? color : "white"}
          height="12"
        />
      </>
    );
}
