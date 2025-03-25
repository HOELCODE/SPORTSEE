import Navbar from './layout/Navbar';
import Aside from './layout/Aside';
import Main from './layout/Main';

import './css/App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Aside />
        <Main />
      </div>

    </div>
  )
}

export default App
