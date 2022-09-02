import type { NextPage, GetServerSideProps } from 'next';
import { useSession, signOut, getSession } from 'next-auth/react';

// components
import Layout from '../../components/Layout';
import AccessDenied from '../../components/AccesDenied';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);

    return {
        props: { session },
    };
};

const feed: NextPage = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') return <span>Loading, please wait...</span>;

    if (status == 'authenticated')
        return (
            <Layout>
                <p>Signed in as {session.user.email}</p>
                <br />
                <p>A sample default page</p>
                <br />
                <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
            </Layout>
        );

    return <AccessDenied />;
};

export default feed;
