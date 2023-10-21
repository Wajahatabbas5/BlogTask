
import Head from 'next/head'
import { NextRouter, useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { Box, Flex, Heading,SimpleGrid } from '@chakra-ui/react'
import BlogCard from '@/components/BlogCards'

const inter = Inter({ subsets: ['latin'] })

export default function Search({data}:any) {
  const router:NextRouter = useRouter();

  const handleSubmit = (id:any) => {
    router.push(`/posts/${id}`);
  }; 

  return (
    <>
      <Head>
        <title>MEDIA COMPANY</title>
        <meta name="description" content="MEDIA COMPANY BLOG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box padding="1.5rem">
          <Heading as="h1" size="xl" mb={10}>
            Our Top Blog Posts
          </Heading>
         <SimpleGrid  spacing={10} templateColumns="repeat(auto-fill, minmax(200px, 4fr))"
        >
            {data.map((item: any) => (
              <BlogCard key={item.id} id={item.id} title={item.title} body={item.body} onClick={handleSubmit}/>
            ))}
          </SimpleGrid>
        </Box>
    </>
  );
}


export async function getServerSideProps(ctx:any) {

  try{
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
  }catch(e){
    console.log(e);
  }
  
}


