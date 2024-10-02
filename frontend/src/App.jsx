import { BrowserRouter as Router, Routes/* , Route  */} from 'react-router-dom';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { ConfigProvider, useConfig } from './context/ConfigContext';
//import { LangProvider } from './context/LangContext'; 
//import SiteSettings from './components/settings/SiteSettings';
//import { SelectedProvider } from './context/SelectedContext';


import "./App.css";

const AppContent = () => {
  const { config } = useConfig();

  return (
    <>
      { config != null && (<Header config={ config }/>) }
      
      <Routes>
        {/* {
          config && config.pages.map((page: { path, template }) => { 
            const PageComponent = pageComponent[page.template];
            return (
              <Route 
                key={page.path} 
                path={page.path} 
                element={<PageComponent type={page.path.replace('/','')} />} 
              />
            );
          })
        }
         */}

         {/* <Route path="/custom-flag" element={} /> */}
      </Routes>
      { config != null && (<Footer config={ config }/>) }
    </>
  );
};

const App = () => {
  return (
      <ConfigProvider>
          <Router>
            <AppContent />
          </Router>
      </ConfigProvider>
  );
};

export default App;
