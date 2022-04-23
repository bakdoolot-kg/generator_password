import './App.css';

import {PassGenerate} from './components'

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div className="wrapper">
          <h2>Generater random password</h2>
          <PassGenerate />
        </div>
      </div>
    </div>
  );
}

export default App;
