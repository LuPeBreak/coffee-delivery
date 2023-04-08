import {Route, Routes} from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Sucess } from './pages/Sucess'

export function Router(){
  return(
    <Routes>
      <Route path='/'>
        <Route path='/' Component={Home}/>
        <Route path='/checkout' Component={Checkout}/>
        <Route path='/sucess' Component={Sucess}/>
      </Route>
    </Routes>
  )
}