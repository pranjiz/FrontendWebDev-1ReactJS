import logo from './logo.svg';
import './App.css';

function App() {
  // const name  = "Pranjal";

  const handleNameChange = () => {
    const names = ['Brinjal', 'Kinjal', 'Pranjal'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          {/* Edit <code>src/App.js</code> and save to see what I change. */}

          {/* <p>Hello World!</p> */}

          {/* <p>Hello {World}!</p> */}

          {/* Hello {name}! */}

          Hello {handleNameChange()}!

        </p>
        
        {/* <p>html</p>

        <p>{"Pranjal"}</p>

        <p>{1}</p>

        <p>{[1, 2, 3]}</p>

        <p>{{ a:1, b:2 }}</p>   ||Objects are not valid as a React child (found: object with keys {a,b}). If you meant to render a collection of children, use an array instead. 

        <p>{true === false}</p>  Boolean is not also rendered 

        <p>{2 === 4}</p>

         <p>{name}</p>  */}
      </header>
    </div>
  );
}

export default App;
