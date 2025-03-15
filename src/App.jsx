import { BrowserRouter, Routes, Route } from 'react-router'
import NavigationBar from './NavigationBar'
import { WeatherProvider } from './WeatherProvider'
import { Home } from './Home'
import { CityDetail } from './CityDetail'




function App() {


  return (
    <WeatherProvider>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ciudades/:ciudad' element={<CityDetail/>}/>

        </Routes>


      </BrowserRouter>
    </WeatherProvider>
  )
}

export default App
