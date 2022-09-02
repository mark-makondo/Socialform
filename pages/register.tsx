import type { NextPage } from 'next';
import homeStyle from '../styles/pages/home.module.scss';
import { LANDING_PAGE_GLITCH_TEXT_DATA } from '../constants/constants';

// components
import Layout from '../components/Layout';
import GlitchedTexts from '../components/GlitchedTexts';
import SignUp from '../components/auth/SignUp';

const Register: NextPage = () => {
    return (
        <Layout isBase>
            <div className={homeStyle.base}>
                <GlitchedTexts
                    fontFamily={LANDING_PAGE_GLITCH_TEXT_DATA.fontFamily}
                    data={LANDING_PAGE_GLITCH_TEXT_DATA.data}
                />
                <SignUp />
            </div>
        </Layout>
    );
};

export default Register;
