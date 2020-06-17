import React from 'react'
import ReactMarkdown from 'react-markdown'
import Head from './head'

const Readme = (props) => {
  return (
    <div id="description">
      <Head title="ReadMe" />
      <ReactMarkdown source={props.readme} />
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
