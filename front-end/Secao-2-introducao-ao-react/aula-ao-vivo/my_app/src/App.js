import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

const thingsILoce = ['JS', 'Trybe', 'Turma25B', 'React', 'Breaking in Bad'];

function myNewLove(newLove) {
  return `Agora eu estou amando o(a) ${newLove}`;
}

// function App() {
//   const name = "Luan";
//   return (
//     <>
//       <h1 className="hello-world">Hello World!!!</h1>
//       <p>A turma 25B gosta muito do REACT!</p>
//       <div>
//         <span>         
//             O professor da turma é o <strong>{ name }</strong>          
//         </span>
//         <ul>
//           <li>{ myNewLove("React") }</li>
//           <li>{ myNewLove("JS") }</li>
//           <li>{ myNewLove("CSS") }</li>
//           <li>{ myNewLove("HTML") }</li>
//         </ul>
//         <ul>
//           { thingsILoce.map((thing) => <li key={thing}>{myNewLove(thing)}</li>) }
//         </ul>
//       </div>
//     </>
//   );
// }

class App extends React.Component {
  render() {
    const name = "Luan";
    return (
      <>
        {/* <h1 hello world */}
        <HelloWorld></HelloWorld>
        <div>
          <span>         
              O professor da turma é o <strong>{ name }</strong>          
          </span>
          <ul>
            <li>{ myNewLove("React") }</li>
            <li>{ myNewLove("JS") }</li>
            <li>{ myNewLove("CSS") }</li>
            <li>{ myNewLove("HTML") }</li>
          </ul>
          <ul>
            { thingsILoce.map((thing) => <li key={thing}>{myNewLove(thing)}</li>) }
          </ul>
        </div>
      </>
    )
  }
}

export default App;
