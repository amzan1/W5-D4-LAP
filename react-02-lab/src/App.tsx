import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import LogInpag from './pages/LogInpag'
import PageNotFound from './components/PageNotFound'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogInpag/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App
