import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/main">Go To Main </Link>
      <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
