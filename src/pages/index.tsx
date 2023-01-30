import { Box } from '@chakra-ui/react';
import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Auth from '../components/Auth/Auth';
import Chat from '../components/Chat/Chat';
// export default function Home() {
const Home: NextPage = () => {
  const session = useSession();
  const { data } = session;
  // const data = { user: { name: 'test' } };
  console.log('data', session?.status);
  return <Box>{data?.user ? <Chat /> : <Auth />}</Box>;
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession();
  return {
    props: {
      session,
    },
  };
}
export default Home;
