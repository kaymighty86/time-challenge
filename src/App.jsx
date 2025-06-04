import './App.css';

import Header from "./components/Header";
import Challenge from "./components/Challenge";

import GameManager from './contexts/GameManager';

function App() {

  return (
    <main>
      <Header />
      <GameManager>
        <section className="challenges_section">
          <Challenge title="EASY" targetTime={1}/>
          <Challenge title="MEDIUM" targetTime={5}/>
          <Challenge title="GETTING TOUGH" targetTime={10}/>
          <Challenge title="PRO" targetTime={15}/>
        </section>
      </GameManager>
    </main>
  )
}

export default App
