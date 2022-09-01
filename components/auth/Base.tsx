import baseAuthStyle from '../../styles/components/auth/base.module.scss';
import { CommonReusableProps } from '../../types/common.type';
import GoogleIcon from '../../public/images/svg/google.svg';

// components
import LineText from '../LineText';

interface BaseAuthProps extends CommonReusableProps {
    title: string;
    description: string;
    footerNode: React.ReactNode;
    btnFormText?: string;
    onSubmit?: (e: React.FormEvent) => void;
}

const Base: React.FC<BaseAuthProps> = ({
    description = '',
    title = '',
    children,
    footerNode,
    btnFormText = '',
    onSubmit,
}) => {
    return (
        <div className={baseAuthStyle.auth__base}>
            <header>
                <h2>{title}</h2>
                <p>{description}</p>
            </header>
            <section>
                <form onSubmit={(e) => onSubmit && onSubmit(e)}>
                    {children}
                    {btnFormText && (
                        <button type="submit" className="btn btn-primary">
                            {btnFormText}
                        </button>
                    )}
                </form>

                <LineText>Or continue with</LineText>

                <div className={baseAuthStyle['auth__base__others']}>
                    <div className={baseAuthStyle['auth__base__others-box']}>
                        <span title="Login with google">
                            <GoogleIcon />
                        </span>
                    </div>
                </div>
            </section>
            {footerNode && <footer>{footerNode}</footer>}
        </div>
    );
};

export default Base;
