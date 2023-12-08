 import './App.css';
import { Header } from './components/Header';
import { Header1 } from './components/Header1';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
         <Header/>
         <AllRoutes/>
    </div>
  );
}

export default App;
