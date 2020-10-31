import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/3b21ca93-2f6b-45ee-92c6-0872fdaf45a7">Go To Profile </Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
