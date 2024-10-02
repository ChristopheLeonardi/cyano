import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import pageServices from '../services/pages';
import { LangProvider } from './LangContext';


const ConfigContext = createContext(undefined);

const ConfigProvider = ({ children }) => {

    const [config, setConfig] = useState(null);

    useEffect(() => {
        pageServices
            .getConfig()
            .then(res => {
                setConfig(res);
            })
            .catch((error) => {
                console.error('Error fetching config:', error);
            });
    }, [LangProvider]);

    return (
        <ConfigContext.Provider value={{ config }}>
            {children}
        </ConfigContext.Provider>
    );
};

const useConfig = () => {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};

export { ConfigProvider, useConfig };
