import { buttonGradient } from "@/css/login/css-login";
import { Button } from "@chakra-ui/react";

export function ButtonDS() {
  return (
    <>
      <Button
        borderRadius="30px"
        width="100%"
        background={buttonGradient.background}
        variant="solid"
        _hover={{
          bg: "linear-gradient(86deg, rgba(253,167,136,1) 26%, rgba(253,166,138,1) 45%, rgba(252,163,132,1) 60%, rgba(251,151,133,1) 77%, rgba(255,133,130,1) 94%)",
        }}
      >
        Entrar
      </Button>
    </>
  );
}
