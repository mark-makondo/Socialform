import Head from 'next/head';
import layoutStyle from '../styles/components/layout.module.scss';
import { CommonReusableProps } from '../types/common.type';

// components
import Nav from './navbar/Nav';

interface layoutProps extends CommonReusableProps {
    isBase?: boolean;
}

const Layout: React.FC<layoutProps> = ({ children, isBase = false }) => {
    const navBackgroundStyle = isBase ? 'transparent' : '#181818';

    return (
        <>
            <Head>
                <title>Socialform</title>
                <meta name="description" content="A social media platform with a twist." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav background={navBackgroundStyle} isBase={isBase} />
            <main className={layoutStyle.base}>
                {isBase && <div className={layoutStyle.base__bg}></div>}
                <div className={layoutStyle['base-wrapper']}>{children}</div>
            </main>
        </>
    );
};

export default Layout;
