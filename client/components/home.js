import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import Main from './main'
import Profile from './profile'

const Home = () => {
  return (
    <div>
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

Home.propTypes = {}

export default React.memo(Home)

// const { userId } = useParams()

// const Dashboard = () => (
//   <div id="title">
//     Dashboard
//     <Link to="/dashboard/main">Go To Main </Link>
//     <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile</Link>
//   </div>
// )

// const Main = () => (
//   <div id="title">
//     Main
//     <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile </Link>
//     <Link to="/dashboard">Go To Root</Link>
//   </div>
// )

// const Profile = () => (
//   <div id="title">
//     Profile
//     <div id="username">{userId}</div>
//     <Link to="/dashboard">Go To Root </Link>
//     <Link to="/dashboard/main">Go To Main</Link>
//   </div>
// )
