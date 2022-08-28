import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AppState from '../context/AppState';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppState>
            <Component {...pageProps} />
        </AppState>
    );
}

export default MyApp;
