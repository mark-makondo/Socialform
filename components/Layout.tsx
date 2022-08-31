import Head from 'next/head';
import layoutStyle from '../styles/components/layout.module.scss';
import { CommonReusableProps } from '../types/common.type';

const Layout: React.FC<CommonReusableProps> = ({ children }) => {
    return (
        <div className={layoutStyle.base}>
            <Head>
                <title>Socialform</title>
                <meta name="description" content="A social media platform with a twist." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
};

export default Layout;
