import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, SimpleGrid } from "@chakra-ui/react";
import { on } from "events";
interface BlogCardProps {
  id:string,
  title: string;
  body: string;
  onClick: any;
}


const BlogCard: React.FC<BlogCardProps> = ({ id,title, body, onClick }:BlogCardProps) => {
  console.log(body)
    return (
      <Card
        maxW="md"
        onClick={() => {
          onClick(id);
        }}
      >
        <CardHeader>
          <Heading size="sm">{title}</Heading>
        </CardHeader>

        <CardBody>
            <Box>
              <Text
                pt="2"
                fontSize="sm"
              >
                {body.slice(0, 40)}...
              </Text>
            </Box>
        </CardBody>
      </Card>
    );
};

export default BlogCard;
