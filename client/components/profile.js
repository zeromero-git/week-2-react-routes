import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  const { userId } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">
        Profile
        <div id="username">{userId}</div>
        <Link to="/dashboard">Go To Root </Link>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
