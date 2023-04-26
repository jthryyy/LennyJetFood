import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { About, Map, NavigationBar } from './components'
import { Flex } from './utils/Flex'
import homeImage from './images/homeImage.jpeg'

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: '-8px' }}>
        <img src={homeImage} width="100%" height="100%" />
        <Flex flexDirection="column">
          <NavigationBar />
          <Flex padding="1.5rem">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </Flex>
        </Flex>
      </div>
    </BrowserRouter>
  )
}

export default App
