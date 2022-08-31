import type { NextPage } from 'next';
import homeStyle from '../styles/pages/home.module.scss';

// components
import Layout from '../components/Layout';
import GlitchedTexts from '../components/GlitchedTexts';

const Home: NextPage = () => {
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
            </div>
        </Layout>
    );
};

export default Home;
