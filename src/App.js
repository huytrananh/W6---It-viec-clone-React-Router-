import React, {useEffect, useState} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route, Redirect} from "react-router-dom"
import Login from './pages/Login'
import Jobs from './pages/Jobs'
import Detail from './pages/Detail'

function App() {

  let [user, setUser] = useState(true)

  const ProtectedRoute = (props) => {
    if (user === true) {
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
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
      </Switch>
    </div>
  );
}

export default App;
