import logo from './logo.svg';
import './App.css';

function App() {

  var nommingCake = document.getElementById('aer').animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-80%)' }
    ], {
      fill: 'forwards',
      easing: 'steps(4, end)',
      duration: aliceChange.effect.getComputedTiming().duration / 2
    });


  return (
    <div className="App">
      <header className="App-header" >
      <div className="Aero" id="aer">
    <p>Asad</p>
 

</div>

      </header>
    </div>
  );
}

export default App;



