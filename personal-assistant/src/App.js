import React from 'react'

import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './containers/Home/index'

import { Todo } from './containers/Todo/index'

import { NavigationBar } from './components/NavBar/index'

const App = () => {

  return (
    <div>
      < NavigationBar />

      <BrowserRouter>
        <Switch>
          <Route path="/todo" component={Todo}/>
          <Route path="/" component={Home}/>
        </Switch>

      </BrowserRouter>        


    </div>
    
  )
}

export default App