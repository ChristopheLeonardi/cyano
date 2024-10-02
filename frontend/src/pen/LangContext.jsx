import { createContext, useState, useContext } from 'react';

const LangContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
const LangProvider = ({ children }) => {
    const userLang = navigator.language || "en-US";

    const matchedLang = userLang.match(/^[^-]+/);
    const initialLang = matchedLang ? matchedLang[0] : 'en';
    const [lang, setLang] = useState(initialLang);
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    );
};

const useLang = () => {
    const context = useContext(LangContext);
    if (context === undefined) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return context;
}

export { LangProvider, useLang, LangContext};
