import React from 'react';
import Context from './Context';
import { CommonReusableProps } from '../types/common.type';

const AppState: React.FC<CommonReusableProps> = ({ children }) => {
    const stateValues = { data: 'sample data' };

    return <Context.Provider value={stateValues}>{children}</Context.Provider>;
};

export default AppState;
