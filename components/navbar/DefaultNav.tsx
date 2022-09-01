import Link from 'next/link';
import { useRouter } from 'next/router';
import navbarStyle from '../../styles/components/navbar.module.scss';

const DefaultNav = () => {
    const currentPath = useRouter().pathname;

    const isPathLogin = currentPath === '/login';
    const isPathRegister = currentPath === '/register';

    return (
        <div className={navbarStyle.base__menu}>
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
};

export default DefaultNav;
