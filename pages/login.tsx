import type { NextPage } from 'next';
import homeStyle from '../styles/pages/home.module.scss';
import { LANDING_PAGE_GLITCH_TEXT_DATA } from '../constants/constants';

// components
import Layout from '../components/Layout';
import GlitchedTexts from '../components/GlitchedTexts';
import SignIn from '../components/auth/SignIn';

const Login: NextPage = () => {
    return (
        <Layout isBase>
            <div className={homeStyle.base}>
                <GlitchedTexts
                    fontFamily={LANDING_PAGE_GLITCH_TEXT_DATA.fontFamily}
                    data={LANDING_PAGE_GLITCH_TEXT_DATA.data}
                />
                <SignIn />
            </div>
        </Layout>
    );
};

export default Login;
