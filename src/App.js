import { useContext, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Lightbulb,LightbulbFill } from "react-bootstrap-icons";
import { ThemeContext, themes } from "./Components/themes/theme";
import './App.css';

function App(){
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log("theme:", theme)
const icons = isDark? ['DARK ' ] : ["LIGHT ","🌕"]
  return(
    <div className={theme.className} >
      <h1>{isDark? 'DARK': "LIGHT"} mode</h1>
       
      <Button
     className={theme.className}
      onClick={toggleTheme}>  {icons} </Button>

    </div>
  )
}
export default App;
