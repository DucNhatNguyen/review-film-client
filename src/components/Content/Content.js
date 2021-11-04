import React from 'react'
import Popular from './InnerContent/Popular.js'
import FreeToWatch from './InnerContent/FreeToWatch.js'
import LatestTrailer from './InnerContent/LatestTrailer.js'

function Content(props) {
  return (
    <>
      <Popular />
      <FreeToWatch />
      <LatestTrailer />
    </>
  )
}

export default Content