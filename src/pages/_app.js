import '@/styles/globals.css';
import '../styles/Home.module.css';
import '../styles/main.scss'
import dynamic from 'next/dynamic';
import ContextProvider from './Context/Context';


const Layout = dynamic(import('./layout/Layout'));

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
