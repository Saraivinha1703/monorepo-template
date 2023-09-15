import {useState} from 'react';
import './App.css';
import {HelloWorld, API, Input} from '@monorepo/shared';

function App() {
  const [count, setCount] = useState(0);
  const [string, setString] = useState('');

  function handleAPICall() {
    API.getHeaders().then(res => setString(res));
  }

  return (
    <div>
      <div></div>
      <h1>Vite + React</h1>
      <div className="flex flex-col">
        <button
          className="w-16 self-center bg-black text-white"
          onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <div className="m-6">
          <HelloWorld className="bg-testGreen-500 w-1/3 p-2 text-center text-white">
            Hello World Web
          </HelloWorld>
        </div>
        <div>
          <button
            className="bg-testGreen-500 m-3 flex-1 rounded-lg p-2 text-white"
            onClick={() => handleAPICall()}>
            API text: {string}
          </button>
        </div>
      </div>
      <Input.Root className="flex flex-col">
        <Input.Label>label do web</Input.Label>
        <Input.Root className="ml-3 flex flex-row items-center justify-start">
          <Input.Content placeholder="digite um texto" className="w-1/3" />
          <Input.Warning className="ml-5" />
        </Input.Root>
      </Input.Root>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
