import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [light,setLight] = useState("light")
function changeLight(){
setLight(light === "light" ? "dark" : "light")
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"

  return (
    <div className={`App ${light}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeLight}>{light} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
