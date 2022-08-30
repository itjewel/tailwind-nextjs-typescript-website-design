import type { AppProps } from 'next/app';
import NextNProgress from "nextjs-progressbar";
import Layout from '../components/Layout';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>    
       <NextNProgress />  
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
