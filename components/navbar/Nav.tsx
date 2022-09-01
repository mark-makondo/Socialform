import navbarStyle from '../../styles/components/navbar.module.scss';
import Image from 'next/image';
import { CommonReusableProps } from '../../types/common.type';

// components
import DefaultNav from './DefaultNav';
import UserNav from './UserNav';

interface navbarProps extends CommonReusableProps {
    background?: string;
    isBase?: boolean;
}

const Navbar: React.FC<navbarProps> = ({ background = '#181818', isBase = false }) => {
    return (
        <nav className={navbarStyle.base} style={{ background }}>
            <div className={navbarStyle.base__logo}>
                <Image
                    role="img"
                    priority
                    width={90}
                    height={30}
                    objectFit="contain"
                    src="/images/svg/my-logo.svg"
                    alt="mylogo"
                />
            </div>
            <div className={navbarStyle.base__content} role="navigation">
                {isBase ? <DefaultNav /> : <UserNav />}
            </div>
        </nav>
    );
};

export default Navbar;
