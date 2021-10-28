import React from "react";
import { Box, Badge, Image, Button } from "@chakra-ui/react";

function BoxForm({ src, name, director }) {
  return (
    <>
      <Box maxW="200px" borderWidth="8px" borderRadius="lg" overflow="hidden">
        <Image src={src} alt={src} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          ></Box>

          <Box>{director}</Box>
          <Box>
            <Button colorScheme="blue">Delete</Button>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default BoxForm;
