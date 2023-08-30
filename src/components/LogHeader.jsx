import { Button, HStack, Box, Spacer, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LogHeader = ({firstName}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  

  return (
    <Box bgColor="blackAlpha.900" w="full">
      <HStack p="4" shadow="base" bgColor="blackAlpha.900">
        <Button p="3" variant="unstyled" color="white">
          <Link to="/">Home</Link>
        </Button>
        <Button p="3" variant="unstyled" color="white">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button p="3" variant="unstyled" color="white">
          <Link to="/coins">Coins</Link>
        </Button>
        <Spacer />
        {isMobile ? (
          <Button p="3" variant="unstyled" color="white">
            <Link to="/SignIn">SignIn</Link>
          </Button>
        ) : (
          <>
            
            <Button p="3" variant="unstyled" color="white">
              {firstName}
              hello
            </Button>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default LogHeader;
