import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import './bootstrap.min.css'
import Dashboard from './components/dashboard/Dashboard'

import Home from './components/Layout'
import Maiar from './components/Maiar'
import Wallet from './components/Wallet'

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/wallet' component={Wallet} />
        <Route path='/maiar' component={Maiar} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
      
    </div>
  )
}

export default App
