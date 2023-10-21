import { Box, Heading, Text } from "@chakra-ui/react";

const AboutPage = () => {
    return (
        <Box p={10}>
            <Heading>About Us</Heading>
            <Text>
                We are a media company dedicated to providing high-quality content to our
                audience. Our team of experienced writers, editors, and producers work
                tirelessly to bring you the latest news, analysis, and entertainment.
            </Text>
            <Text>
                Our mission is to inform, educate, and inspire our readers and viewers. We
                believe in the power of media to shape public opinion and drive positive
                change in the world.
            </Text>
        </Box>
    );
};

export default AboutPage;
