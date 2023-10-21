import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const toast = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Here you can add your own logic to handle the form submission
        // For this example, we'll just show a success message
        toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box p={10}>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </FormControl>
                <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea value={message} onChange={(event) => setMessage(event.target.value)} />
                </FormControl>
                <Button type="submit" mt={4}>
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
