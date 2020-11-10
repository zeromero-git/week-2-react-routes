import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { history } from '../redux'
import Header from './header'

const InputName = (props) => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    props.onChange(newValue)
  }
  return (
    <input
      id="input-field"
      value={value}
      onChange={onChange}
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="userName"
      STYLE="color: yellow"
    />
  )
}

const Search = () => {
  const [name, setName] = useState()
  const onInputChange = (text) => {
    setName(text)
  }
  function goName() {
    history.push(`/${name}`)
  }
  return (
    <form className="w-full max-w-sm">
      <InputName onChange={onInputChange} />
      <div className="flex items-center border-b border-teal-500 py-2">
        <button
          id="search-button"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={goName}
        >
          Seacrh
        </button>
      </div>
    </form>
  )
}

const UserName = () => {
  const { userName } = useParams()
  const Headers = () => {
    return (
      <div>
        <div id="repositoryName">{userName}</div>
        <div id="go-back">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    )
  }
  const User = (props) => {
    const user = props
    return (
      <div key={user.name}>
        <div style={{ width: '250px' }}>
          <Link to={`/${userName}/${user.name}`}>{user.name}</Link>
        </div>
      </div>
    )
  }
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setUsers(it.data)
    })
    return () => {}
  }, [userName])
  return (
    <div>
      <Headers />
      {users.map((user) => {
        // eslint-disable-next-line
        return <User key={user.name} {...user} />
      })}
    </div>
  )
}

const UserRepo = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [repo, setRepo] = useState({})
  const [mark, setMark] = useState({})
  const Headers = () => {
    return (
      <div>
        <div id="repositoryName">{userName}</div>
        <div id="go-back">
          <Link to="/">Go Root</Link>
        </div>
        <div id="go-repository-list">
          <Link to={`/${userName}`}>Go Back</Link>
        </div>
      </div>
    )
  }
  useEffect(
    () => {
      axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then((it) => {
        setRepo(it.data)
      })
      return () => {}
    },
    { userName, repositoryName }
  )
  useEffect(
    () => {
      axios.get(`${repo.download_url}`).then((it) => {
        setMark(it.data)
      })
      return () => {}
    },
    { repo }
  )
  return (
    <div>
      <Headers />
      <ReactMarkdown source={mark} />
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/" component={() => <Search />} />
            <Route exact path="/:userName" component={() => <UserName />} />
            <Route exact path="/:userName/:repositoryName" component={() => <UserRepo />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
