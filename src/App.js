import { useState } from 'react';
import './App.css';
import Number from './components/Number';

function App() {
  const [numA,setNumA] = useState(1);
  const [numB,setNumB] = useState(1);
  const [historyA,setHistoryA] = useState([]);
  const [historyB,setHistoryB] = useState([]);
  const [sumA,setSumA] = useState(0);
  const [sumB,setSumB] = useState(0);

  function random(n){
    return(
      Math.ceil(Math.random()*n)
    )
  }

  function result(){
    const nextNumberA = random(6);
    const nextNumberB = random(6);
   setNumA(nextNumberA);
   setNumB(nextNumberB);
   setSumA(sumA+nextNumberA);
   setSumB(sumB+nextNumberB);
   setHistoryA([...historyA,nextNumberA]);
   setHistoryB([...historyB,nextNumberB]);
  }

  function reset(){
    setNumA(1);
    setNumB(1);
    setSumA(0);
    setSumB(0);
    setHistoryA([]);
    setHistoryB([]);
  }

  return (
    <div id="app">
      <h1>Who is the winner?</h1>
      <ul>
        <li>
          <button 
          type="button"
          onClick={()=>result()}>
            Start
          </button>
        </li>
        <li>
          <button 
          type="button"
          onClick={()=>reset()}
          >
            Reset
          </button>
        </li>
      </ul>
      <div id="number">
        <Number
        team={'A팀'}
        num={numA}
        sum={sumA}
        history={historyA}
        />
        <dl>
          <dt>이번판 승리팀</dt>
          <dd>
            {
            numA > numB ? 'A팀' :
            numB > numA ? 'B팀' : '무승부'
            }
          </dd>
          <dt>전체 승리팀</dt>
          <dd>
            {
            sumA > sumB ? 'A팀' :
            sumB > sumA ? 'B팀' : '무승부'
            }
          </dd>
        </dl>
        <Number
        team={'B팀'}
        num={numB}
        sum={sumB}
        history={historyB}
        />
      </div>
    </div>
  );
}

export default App;
