import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Repos = (props) => {
  const { user } = useParams()

  return (
    <div>
      <Head title="Repositories List" />
      {props.repos.map((repo) => (
        <div className="bg-indigo-600 text-white rounded p-2 mb-2" key={repo.id}>
          <Link to={`/${user}/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
