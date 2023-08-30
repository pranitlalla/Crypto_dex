import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack, Box, Spacer, useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const isLoggedIn = JSON.parse(localStorage.getItem("data"));

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
          <div>
            {isLoggedIn ? (
              <div style={{ color: "white", display: "flex", alignItems: "center" }}>
                <span style = {{
                  marginTop : "7px"
                }}
                >{isLoggedIn.firstName}</span>
                <Button
                  p="3"
                  variant="unstyled"
                  color="white"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Button p="3" variant="unstyled" color="white">
                  <Link to="/SignIn">SignIn</Link>
                </Button>
                <Button p="3" variant="unstyled" color="white">
                  <Link to="/SignUp">SignUp</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </HStack>
    </Box>
  );
};

export default Header;
