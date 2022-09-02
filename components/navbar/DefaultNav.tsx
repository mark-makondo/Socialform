import { useContext } from 'react';
import Link from 'next/link';
import navbarStyle from '../../styles/components/navbar.module.scss';
import Context from '../../context/Context';

const DefaultNav = () => {
    const ctx = useContext(Context);

    const currentPath = ctx.router.pathname;

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
