import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { ConfigProvider, useConfig } from './context/ConfigContext';

import Accueil from './components/pages/Accueil'
import GridPage from './components/pages/GridPage'
import SinglePage from './components/pages/SinglePage'
import Tirage from './components/pages/Tirage'
//import { LangProvider } from './context/LangContext'; 
//import SiteSettings from './components/settings/SiteSettings';
//import { SelectedProvider } from './context/SelectedContext';

const componentMapping = {
  'Accueil': Accueil,
  'GridPage': GridPage,
  'SinglePage': SinglePage,
  'Tirage': Tirage,
  // Add other components as needed
};

import "./App.css";

const AppContent = () => {
  const { config } = useConfig();
  
  return (
    <>
      { config != null && (<Header config={ config }/>) }
      <Routes>
        { config != null && config.menu && config.menu.rawMenu.map(item => {
           const Component = componentMapping[item.Component];
           const path = item.parent ? item.parent.path + '/' + item.path : item.path
           return <Route key={item.id} path={path} element={<Component data={item}/>} />
        })}
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
