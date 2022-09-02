import { signIn } from 'next-auth/react';
import baseAuthStyle from '../../styles/components/auth/base.module.scss';
import Link from 'next/link';

// components
import Base from './Base';
import SpecialInput from '../form/SpecialInput';
import MailIcon from '../../public/images/svg/envelope-fill.svg';
import KeyIcon from '../../public/images/svg/key-fill.svg';

const SignIn = () => {
    const renderFooter = () => (
        <>
            <p>
                Don't have an account?
                <Link href="/register">
                    <a>
                        <span> Register</span>
                    </a>
                </Link>
            </p>
            <Link href="/">
                <a>
                    <span>Forgot password?</span>
                </a>
            </Link>
        </>
    );

    return (
        <div className={baseAuthStyle.auth}>
            <Base
                title="Let's sign you in"
                description="Connect with your friends by signing in."
                btnFormText="Sign In"
                footerNode={renderFooter()}
                onSubmit={(e) => e.preventDefault()}
                onGoogleLogin={() => signIn('google', { callbackUrl: '/user' })}
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
                    attr={{ type: 'checkbox', name: 'showPassword' }}
                    label="Show Password"
                    labelPos="inline-right"
                />
            </Base>
        </div>
    );
};

export default SignIn;
