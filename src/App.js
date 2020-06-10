import React, {useEffect, useState} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route, Redirect} from "react-router-dom"
import Login from './pages/Login'
import Jobs from './pages/Jobs'
import Detail from './pages/Detail'
import Err404Page from './pages/Err404Page'
import {useSelector} from 'react-redux'

function App() {

  // let [user, setUser] = useState(false)

  const user = useSelector(state => state.user)

  const ProtectedRoute = (props) => {
    console.log(user.isAuthenticated)
    if (user.isAuthenticated === true) {
      return <Route {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props) => <Detail{...props}/>}/>
        {/* <Route path="/jobs/:id" component={Detail}/> */}
        <Route path="/err" component={Err404Page}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
      </Switch>
    </div>
  );
}

export default App;
