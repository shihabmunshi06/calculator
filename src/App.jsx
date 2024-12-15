import React from 'react'

import LeftSide from "./sections/LeftSide"
import RightSide from './sections/RIghtSide'
export default function App() {
  return (
    <div className="main-wrapper">
      <h1 className='splitter-text'>
          <span>spli</span>
          <span>tter</span>
        </h1>
      <div className='white-bg'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}
