import { useStore } from "./useStore";

export default function Overlay() {
  const { score, lives, gameStatus, startGame, launch, levelIndex } = useStore();

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', color: 'white', fontFamily: 'sans-serif' }}>
      <div className="info-wrapper">
        <div className="info-block">
          <div>SCORE: {score}</div>
          <div>LEVEL: {levelIndex + 1}</div>
        </div>
        <div className="info-block">LIVES: {lives}</div>
      </div>

      <div className="overlay-wrapper">
        {gameStatus === 'START_SCREEN' && (
          <div className="overlay-block overlay-bg">
            <h1>ARKANOID 3D</h1>
            <button className="button" onClick={startGame}>START GAME</button>
          </div>
        )}

        {gameStatus === 'READY' && (
          <div onClick={launch} className="overlay-block">
            <h2 style={{ cursor: 'pointer'}}>CLICK TO LAUNCH</h2>
          </div> 
        )}

        {gameStatus === 'GAME_OVER' && (
          <div className="overlay-block overlay-bg">
              <h1>GAME OVER</h1>
              <button className="button" onClick={startGame}>TRY AGAIN</button>
          </div>
        )}

        {gameStatus === 'VICTORY' && (
          <div className="overlay-block overlay-bg">
            <h1>VICTORY!</h1>
            <button className="button" onClick={startGame} >PLAY AGAIN</button>
          </div>
        )}
      </div>
    </div>
  );
}
