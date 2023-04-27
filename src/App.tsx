import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Flex } from './utils/Flex'
import { useTranslateOnScroll } from './hooks'
import { About, Map, NavigationBar } from './components'
import homeImage from './images/homeImage.jpeg'

function App() {
  const elementRef = useTranslateOnScroll()

  return (
    <BrowserRouter>
      <div style={{ margin: '-8px' }}>
        <img src={homeImage} width="100%" />
        <About />
        <Flex flexDirection="column">
          <NavigationBar />
          <Flex ref={elementRef}>
            <Routes>
              <Route path="/" element={<Map />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Flex>
        </Flex>
      </div>
    </BrowserRouter>
  )
}

export default App
