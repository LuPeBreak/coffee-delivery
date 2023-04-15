import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { PurchaseCompleted } from './pages/PurchaseCompleted'

export function Router() {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/purchase-completed" Component={PurchaseCompleted} />
      </Route>
    </Routes>
  )
}
