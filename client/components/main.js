import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`./${value}`)
  }

  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          <input type="text" id="input-field" value={value} onChange={onChange} className="mr-3" />
          <button
            type="button"
            id="search-button"
            className="bg-indigo-500 text-white font-bold rounded-lg border shadow-lg p-2"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
