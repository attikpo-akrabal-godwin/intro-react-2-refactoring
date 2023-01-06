
import { Provider } from 'react-redux'
import { HashRouter,Routes,Route } from 'react-router-dom'
import { store } from './module/store/store'
import { Calendar } from './pages/calendar'
import { Login } from './pages/login'

function App() {
 
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  )
}

export default App
