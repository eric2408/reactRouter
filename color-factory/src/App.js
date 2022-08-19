import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import ColorList from "./ColorList.js";
import NewColorForm from "./NewColorForm";
import ColorPage from "./ColorPage";

function App() {
  const initColors = JSON.parse(localStorage.getItem('colors')) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  }
  
  const [colors, setColors] = useState(initColors);

  useEffect(
    () => localStorage.setItem('colors', JSON.stringify(colors)),
    [colors]
  );

  const handleAdd = (newColor) => {
    setColors(color => ({...color, ...newColor}));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <ColorPage {...props} hex={hex} color={color} />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors" >
          <ColorList colors={colors}/>
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd}/>
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor}/>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
