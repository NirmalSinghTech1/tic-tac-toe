import gameLogo from './assets/game-logo2.png'
import './App.css'


console.log(gameLogo)
function App() {
  return (
    <>
    <header>
      <img src={gameLogo} alt="Tic tac toe 3d logo" width={250} height={250} className='main-logo' />
      <h1>TIC TAC TOE</h1>
    </header>
    </>
  )
}

export default App
