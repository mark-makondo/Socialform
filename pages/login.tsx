import type { NextPage } from 'next';
import homeStyle from '../styles/pages/home.module.scss';

// components
import Layout from '../components/Layout';
import GlitchedTexts from '../components/GlitchedTexts';
import SignIn from '../components/auth/SignIn';

const Login: NextPage = () => {
    return (
        <Layout isBase>
            <div className={homeStyle.base}>
                <GlitchedTexts
                    fontFamily="Rubik Glitch"
                    data={[
                        { label: '.TALK', color: '#0DBFF6' },
                        { label: '.CONNECT', color: '#EEEEEE' },
                        { label: '.SOCIALIZE', color: '#EEEEEE' },
                    ]}
                />
                <SignIn />
            </div>
        </Layout>
    );
};

export default Login;
