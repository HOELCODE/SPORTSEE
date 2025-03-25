import Navbar from './layout/Navbar';
import Aside from './layout/Aside';
import AppRouter from './routes/Router';

import './css/App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Aside />
        <AppRouter />
      </div>

    </div>
  )
}

export default App
