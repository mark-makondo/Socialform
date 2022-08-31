import baseAuthStyle from '../../styles/components/auth/base.module.scss';
import Link from 'next/link';

// components
import Base from './Base';
import SpecialInput from '../form/SpecialInput';
import MailIcon from '../../public/images/svg/envelope-fill.svg';
import KeyIcon from '../../public/images/svg/key-fill.svg';

const SignUp = () => {
    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const renderFooter = () => (
        <p>
            Already have an account?
            <Link href="/login">
                <a>
                    <span> Login</span>
                </a>
            </Link>
        </p>
    );

    return (
        <div className={baseAuthStyle.auth}>
            <Base
                title="Join us now"
                description="Become a member and connect with people."
                btnFormText="Sign Up"
                footerNode={renderFooter()}
                onSubmit={handleOnSubmit}
            >
                <SpecialInput
                    SVG={<MailIcon />}
                    attr={{ type: 'email', placeholder: 'Enter Email', name: 'email', autoComplete: 'off' }}
                />
                <SpecialInput
                    SVG={<KeyIcon />}
                    attr={{
                        type: 'password',
                        placeholder: 'Enter Password',
                        name: 'password',
                        autoComplete: 'new-password',
                    }}
                />
                <SpecialInput
                    SVG={<KeyIcon />}
                    attr={{
                        type: 'password',
                        placeholder: 'Confirm Password',
                        name: 'confirmPassword',
                        autoComplete: 'new-password',
                    }}
                />
                <SpecialInput
                    attr={{ type: 'checkbox', name: 'showPassword' }}
                    label="Show Password"
                    labelPos="inline-right"
                />
            </Base>
        </div>
    );
};

export default SignUp;
