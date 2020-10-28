import React from 'react'
import { Switch, Route, Link, useParams } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div id="title">
      Dashboard
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
            <Route exact path="/dashboard/profile/:userId" component={() => <Profile />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div id="title">
      Dashboard
      <ul>
        <li>
          <Link to="/dashboard/main">Go To Main</Link>
        </li>
        <li>
          <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile</Link>
        </li>
      </ul>
    </div>
  )
}

const Main = () => {
  return (
    <div id="title">
      Main
      <ul>
        <li>
          <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Go To Root</Link>
        </li>
      </ul>
    </div>
  )
}

const Profile = () => {
  const { userId } = useParams()
  return (
    <div id="title">
      Profile
      <ul>
        <li>
          <Link to="/dashboard">Go To Root</Link>
        </li>
        <li>
          <Link to="/dashboard/main">Go To Main</Link>
        </li>
      </ul>
      <div id="username">{userId}</div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
