import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps, router }) {
    const isHomePage = router.pathname === '/';

    return (
        <Layout isHomePage={isHomePage}>
            <Component {...pageProps} />
        </Layout>
    );
}

