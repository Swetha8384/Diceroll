
import './App.css';
import {useState} from 'react';
import Person1 from './Person1';
import Person2 from './Person2';
function App() {
  //var cscore;
  const [player, setPlayer]=useState('player1')
  const [p1currentscore,p1setCurrentscore]=useState(0);
  const [p2currentscore,p2setCurrentscore]=useState(0);
  const [p1total,p1setTotal]=useState(0);
  const [p2total,p2setTotal]=useState(0);
  const [p1color ,p1setColor]=useState("")
  const [p2color ,p2setColor]=useState("")
  const [rollValue, setRollValue] = useState();

  const roll = () => {
    
   let a=(Math.floor(Math.random() * 6 + 1));
   setRollValue(a);
   if(player==='player1')
   
   {
   if(a!==6)
   {
     var cal=p1currentscore+a;
     p1setCurrentscore(cal)
     
   }
   else
   {
     setPlayer('player2');
     p1setCurrentscore(0)
     p1setColor("red")
     p2setColor("green")
   }
}
  else{
    if(a!==6 )
    
    {
     var cal2=p2currentscore+a;
     p2setCurrentscore(cal2)
    }
    else{
      setPlayer('player1');
      p2setCurrentscore(0)
     p2setColor("red")
     p1setColor("green")
    }
   }
    
 };

  const hold=()=>{
    
     if(player==='player1')
     {
       var p1=p1total+p1currentscore;
       p1setTotal(p1);
       p1setCurrentscore(0)
       setPlayer('player2');
       p1setColor("red")
       p2setColor("green")
     }
     else{
      var p2=p2total+p2currentscore;
      p2setTotal(p2);
      p2setCurrentscore(0)
      setPlayer('player1');
      p1setColor("green")
      p2setColor("red") 
    } 
  }
  return (
    <div className="App">
               <h1>dice game</h1>
              <div class="column1" id={p1color} >
              <h3>P1</h3>
              <h3>total score:{p1total}</h3>
              <text>current score:{p1currentscore }</text>
          </div>
          
        <div class="center" id="2" >
          <h3>Roll</h3> 
             <p> dice value: {rollValue}</p>
           <br></br>
              <button onClick={roll}>roll</button>
              <br></br>
             <button onClick={hold} >hold</button>
          </div>
          <div class="column2" id={p2color}>
            <h3>P2</h3>
            <h3>total score:{p2total}</h3>
            <text>current score:{p2currentscore }</text>
          </div>
        </div> 
      );
}

export default App;
