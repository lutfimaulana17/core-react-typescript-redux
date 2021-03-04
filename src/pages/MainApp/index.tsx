import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Sample } from '../../pages'

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
        <div className="content-wrapper">
            <h3>Header</h3>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sample" component={Sample} />
                </Switch>
            </Router>
            <h3>Footer</h3>
        </div>
    </div>
  )
}

export default MainApp
