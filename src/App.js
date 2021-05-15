import './App.css';
import Navbar from './components/ui/MainNavigation'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddMonsterPage from './pages/AddMonsterPage';

function App() {
  return (
  
    <Navbar>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/add' exact>
        <AddMonsterPage/>
      </Route>
    </Navbar>

    
  )
}

export default App;
