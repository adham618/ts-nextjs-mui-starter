import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import Copyright from '@/components/Copyright';
import Layout from '@/components/Layout';
import Link from '@/components/Link';
import ProTip from '@/components/ProTip';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Link href='/about' color='secondary'>
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
