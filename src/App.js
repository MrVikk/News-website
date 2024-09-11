// import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <>
    
    <div style={{backgroundColor: 'wheat'}}>
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='business'
                pageSize={9}
                country='in'
                category='business'
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='entertainment'
                pageSize={9}
                country='in'
                category='entertainment'
              />
            }
          />
          <Route
            exact
            path='/general'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='general'
                pageSize={9}
                country='in'
                category='general'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='health'
                pageSize={9}
                country='in'
                category='health'
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='science'
                pageSize={9}
                country='in'
                category='science'
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='sports'
                pageSize={9}
                country='in'
                category='sports'
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key='technology'
                pageSize={9}
                country='in'
                category='technology'
              />
            }
          />
        </Routes>
      </div>
      </div>
    </>
  )
}
export default App
