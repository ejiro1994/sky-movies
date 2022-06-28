import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import videoBg from '../assets/waves-abstract.mp4'
import './styles/main.css'

import useStyles from './styles'

import { Actors, Movies, NavBar, Profile, MovieInformation } from './'
import Glass from './Glass'

const App = () => {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <video src={videoBg} autoPlay loop muted playbackRate={0.2}/>
      {/* <NavBar /> */}
      <main className={classes.content}>
      <Glass />
      
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
