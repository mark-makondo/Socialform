import lineTextStyle from '../styles/components/line-text.module.scss';
import { CommonReusableProps } from '../types/common.type';

const LineText: React.FC<CommonReusableProps> = ({ children }) => {
    return (
        <div className={lineTextStyle.base}>
            <hr />
            {children}
            <hr />
        </div>
    );
};

export default LineText;
