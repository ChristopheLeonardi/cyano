import { createContext, useState, useEffect, useContext } from 'react';
import pageServices from '../services/page';
//import { LangProvider } from './LangContext';

const ConfigContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
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
  }, []);

  useEffect(() => {
    if (config && !config.menu) { 
        pageServices
            .getMenu()
            .then(res => {
                const newConfig = {
                    ...config,
                    "menu": res
                }
                setConfig(newConfig);
            })
            .catch((error) => {
                console.error('Error fetching menu:', error);
            });
    }
}, [config]);

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
