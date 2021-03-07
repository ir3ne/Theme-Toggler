import {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>  
  );
}

export default App;

