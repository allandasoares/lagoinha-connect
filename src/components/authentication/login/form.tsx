import { Box, Flex, Image, Link } from "@chakra-ui/react";
import HeaderForm from "../headerForm";
import Form from "../form";
import { ButtonDS } from "@/design-system/button";

export default function FormLogin() {
  return (
    <>
      <Flex p="20" justify="start">
        <Box width="30%">
          <HeaderForm
            title="Bem-vindo!"
            subtitle="Por favor, entre com o seu e-mail e senha"
          />

          <Box lineHeight="50px" mt="20px">
            <Form />
            <Flex justify="space-between">
              <Link
                textDecorationLine="underline"
                color="white"
                href="http://localhost:3000/register"
              >
                Cadastrar
              </Link>
              <Link
                textDecorationLine="underline"
                color="white"
                href="http://localhost:3000/recuperar"
              >
                Esqueci a senha
              </Link>
            </Flex>

            <ButtonDS />

            <Flex p="4" mt="15px" justifyContent="center" gap="5">
              <Box background="white" p="2" borderRadius="30px">
                <Image src="/images/sign-google.png" width="30px" />
              </Box>

              <Box background="white" p="2" borderRadius="30px">
                <Image src="/images/sign-facebook.png" width="30px" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
