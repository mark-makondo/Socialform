import React from 'react';
import Context from './Context';
import { CommonReusableProps } from '../types/common.type';
import { useRouter } from 'next/router';

const AppState: React.FC<CommonReusableProps> = ({ children }) => {
    const router = useRouter();
    const stateValues = { router };

    return <Context.Provider value={stateValues}>{children}</Context.Provider>;
};

export default AppState;
