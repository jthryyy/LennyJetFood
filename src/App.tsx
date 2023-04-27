import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Flex } from './utils/Flex'
import { useTranslateOnScroll } from './hooks'
import { About, Footer, Map, NavigationBar } from './components'
import homeImage from './images/homeImage.jpeg'

function App() {
  const elementRef = useTranslateOnScroll()

  return (
    <BrowserRouter>
      <div style={{ margin: '-8px' }}>
        <img src={homeImage} width="100%" />
        <a href="#about" style={{ textDecoration: 'none' }}>
          <About />
        </a>
        <Flex flexDirection="column">
          <NavigationBar />
          <Flex ref={elementRef}>
            <Routes>
              <Route path="/" element={<Map />} />
            </Routes>
          </Flex>
        </Flex>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
