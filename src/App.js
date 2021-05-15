import './App.css';
import Navbar from './components/ui/MainNavigation'
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import AddMonsterPage from './pages/AddMonsterPage';
import EditMonsterPage from './pages/EditMonsterPage';

function App() {
  return (
  
    <Navbar>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/add' exact>
        <AddMonsterPage/>
      </Route>
      <Route path='/edit' exact>
        <EditMonsterPage/>
      </Route>
    </Navbar>

    
  )
}

export default App;
