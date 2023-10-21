import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Box>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link href="/">Blog App</Link>
        </Heading>
      </Box>
      <Box display={{ base: "block", md: "none" }}>....</Box>
      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex align="center" justify="flex-end">
          <Flex width={300} justify="space-between">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Nav