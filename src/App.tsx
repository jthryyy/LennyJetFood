import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { About, Map, NavigationBar } from './components'
import { Flex } from './utils/Flex'
import homeImage from './images/homeImage.jpeg'
import { useTranslateOnScroll } from './hooks/hooks'

function App() {
  const elementRef = useTranslateOnScroll()

  return (
    <BrowserRouter>
      <div style={{ margin: '-8px' }}>
        <img src={homeImage} width="100%" />
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
