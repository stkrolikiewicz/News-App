import { Routes, Route } from 'react-router-dom'
import Country from './pages/Country'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:countryName' element={<Country />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App 