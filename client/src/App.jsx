// import { useState } from 'react'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import CommentaireForm from './components/CommentaireForm';
import CommentaireList from './components/CommentairesList';
import Top from './components/Top';
import AlwaysOnTop from './components/AlwaysOnTop';
import Lorem from './components/Lorem';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>App.jsx</h1> */}
      <AlwaysOnTop />
      <Top />
      {/* <CommentaireForm />
      <CommentaireList /> */}
      <Lorem />
    </div>
  );
}

export default App;
