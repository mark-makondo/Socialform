import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import AppState from '../context/AppState';

const MyApp: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <SessionProvider session={session}>
            <AppState>
                <Component {...pageProps} />
            </AppState>
        </SessionProvider>
    );
};

export default MyApp;
