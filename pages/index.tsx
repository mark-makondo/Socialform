import type { NextPage } from 'next';
import homeStyle from '../styles/pages/home.module.scss';

// components
import Layout from '../components/Layout';
import GlitchedTexts from '../components/GlitchedTexts';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className={homeStyle.base}>
                <GlitchedTexts
                    fontFamily="Rubik Glitch"
                    data={[{ label: '.TALK', color: '#0DBFF6' }, { label: '.INTERACT' }, { label: '.SOCIALIZE' }]}
                />
            </div>
        </Layout>
    );
};

export default Home;
