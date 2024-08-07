import { InputDS } from "@/design-system/input";
import { TypographyDS } from "@/design-system/typography";
import { Box } from "@chakra-ui/react";

export default function Form() {
  return (
    <>
      <TypographyDS text="E-mail" type="subtitle" />
      <InputDS typeInput="form" />

      <TypographyDS text="Senha" type="subtitle" />
      <InputDS typeInput="form" type="password" />
    </>
  );
}
