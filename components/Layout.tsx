import layoutStyle from '../styles/components/layout.module.scss';
import { CommonReusableProps } from '../types/common.type';

const Layout: React.FC<CommonReusableProps> = ({ children }) => {
    return <div className={layoutStyle.base}>{children}</div>;
};

export default Layout;
