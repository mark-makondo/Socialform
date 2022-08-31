import Head from 'next/head';
import { useRouter } from 'next/router';
import layoutStyle from '../styles/components/layout.module.scss';
import { CommonReusableProps } from '../types/common.type';
import Link from 'next/link';

// assets
import background from '../public/images/others/artistric-abstract.png';

// components
import Navbar from './Navbar';

interface layoutProps extends CommonReusableProps {
    isBase?: boolean;
}

const Layout: React.FC<layoutProps> = ({ children, isBase = false }) => {
    const currentPath = useRouter().pathname;

    const isPathLogin = currentPath === '/login';
    const isPathRegister = currentPath === '/register';
    const navBackgroundStyle = isBase ? 'transparent' : '';

    const renderNavbarContent = () => {
        let defaultRender = (
            <div className={layoutStyle['base-nav-content']}>
                {!isPathLogin && (
                    <button type="button" className="btn btn-borderless">
                        <Link href="/login">Login</Link>
                    </button>
                )}
                {!isPathRegister && (
                    <button type="button" className="btn btn-borderless">
                        <Link href="/register">Register</Link>
                    </button>
                )}
            </div>
        );
        if (!isBase) defaultRender = <span>I am not at Base</span>;

        return defaultRender;
    };

    return (
        <>
            <Head>
                <title>Socialform</title>
                <meta name="description" content="A social media platform with a twist." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar background={navBackgroundStyle}>{renderNavbarContent()}</Navbar>
            <main
                className={layoutStyle.base}
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#a3a3a3',
                    backgroundBlendMode: 'darken',
                }}
            >
                {children}
            </main>
        </>
    );
};

export default Layout;
