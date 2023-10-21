import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Flex as="footer" align="center" justify="center" h="100px">
            <Text fontSize="sm" color="gray.500">
                @{currentYear} My Blog. All rights reserved.
            </Text>
        </Flex>
    );
};

export default Footer;
