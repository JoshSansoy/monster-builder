import './App.css';
import Navbar from './components/ui/MainNavigation'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
  
    <Navbar>
      <Route path='/' exact>
        <HomePage/>
      </Route>
    </Navbar>

    
  )
}

export default App;
