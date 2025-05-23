import {ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import '../styles/globals.css';
import {AppCacheProvider} from '@mui/material-nextjs/v15-pagesRouter';
import Head from 'next/head';

export default function App(props) {
  const {Component, pageProps} = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>My App</title>
        <meta charSet="utf-8" data-next-head=""/>
      </Head>
      <ApolloProvider client={client}>
        {Component && <Component {...pageProps} />}
      </ApolloProvider>
    </AppCacheProvider>
  );
}
