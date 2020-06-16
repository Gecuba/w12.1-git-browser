import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
      <div id="repository-name">{repository || user || 'Welcome'}</div>
      {user && (
        <Link to="/" id="go-back" className="mr-2">
          Home
        </Link>
      )}
      {repository && (
        <Link to={`/${user}`} id="go-repository-list">
          Repository List
        </Link>
      )}
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
