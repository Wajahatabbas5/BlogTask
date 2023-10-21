
import { GetServerSideProps } from "next";
import { Flex, Heading,Text, Image, Box } from "@chakra-ui/react";

interface IBlog {
  id: number;
  imgUrl: string;
  title: string;
  body: string;
}

const BlogDetail: React.FC<IBlog> = ({ blog }:any) => {

  return (
    <Flex p={10} flexDir={"column"}>
      <Box >
        <Image
          src={`https://source.unsplash.com/random/1000x200?sig=${blog.id}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="full"
        />
      </Box>
      <Heading mb={10}>{blog.title}</Heading>
      <Text>{blog.body}</Text>
    </Flex>
  );
};

export default BlogDetail;

export const getServerSideProps: GetServerSideProps = async ({
  params}: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`
);
const blog = await res.json();

 console.log(blog)
  return {
    props: {
      blog,
    },
  };
};

