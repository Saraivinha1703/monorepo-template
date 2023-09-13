import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {HelloWorld, ColoredTest, API} from '@monorepo/shared';

function App() {
  const [count, setCount] = useState(0);
  const [string, setString] = useState('');

  function handleAPICall() {
    API.getHeaders().then((res) => setString(res.data.headers.Host))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="bg-black text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <div className="bg-slate-700 p-2">
        <HelloWorld />
        <ColoredTest />
        <button className="bg-slate-400 p-1 m-3" onClick={() => handleAPICall()}>
          API text: {string}
        </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
