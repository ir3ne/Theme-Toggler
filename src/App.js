import {useState} from 'react';

function App() {
  const [theme, setTheme] = useState("red");

  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red");
  }

  return (
    <div>
      <Text theme={theme} />
      <button onClick={onClickHandler}>Change Theme</button>
    </div>
  );
}

function Text({theme}) {
  return(
    <h1 style = {{
      color: `${theme}`
    }}>{theme}</h1>
  );
  }

export default App;
