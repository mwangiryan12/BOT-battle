import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Botcollection from "./components/botcollection/botcollection";
import Yourbotarmy from "./components/yourbotarmy/yourbotarmy";
import BotSpecs from "./components/botspecs/BotSpecs";

function App() {
  const [botcollection, setBotcollection] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [botSpecsShown, setBotspecsShown] = useState({});

  useEffect(() => {
    fetch("https://bot-battlr-json-server.onrender.com/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBotcollection(data);
        console.log(data)
      });
  }, []);
 console.log(botcollection);
  return (
    <div className="App">
      <header>Bot Battlr</header>
      <Yourbotarmy armyBots={armyBots} setArmyBots={setArmyBots} />
      <Routes>
        <Route
        
          path=""
          element={
            <Botcollection
              setBotspecsShown={setBotspecsShown}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
              botcollection={botcollection}
              setBotcollection={setBotcollection}
            />
          }
        />
        <Route
    
          path=""
          element={
            <BotSpecs
              botSpecsShown={botSpecsShown}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;