import {Route} from 'react-router-dom'
import React from 'react'
import Customform from './Customform'

export default function App() {
  return (
    <>
    <Customform/>
    <div>
      <Route path="/form" component={Customform}/>
    </div>
    </>
  )
}
