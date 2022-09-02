namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        GOOGLE_ID: string;
        GOOGLE_SECRET: string;
        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;
    }
}
