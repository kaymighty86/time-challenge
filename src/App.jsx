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
          <Challenge title="EASY" seconds={1}/>
          <Challenge title="MEDIUM" seconds={5}/>
          <Challenge title="GETTING TOUGH" seconds={10}/>
          <Challenge title="PRO" seconds={15}/>
        </section>
      </GameManager>
    </main>
  )
}

export default App
