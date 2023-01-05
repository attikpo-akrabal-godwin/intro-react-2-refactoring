
import { HashRouter,Routes,Route } from 'react-router-dom'
import { Calendar } from './pages/calendar'
import { Login } from './pages/login'

function App() {
 
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
