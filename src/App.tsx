import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/layouts'
import Views from './views/Views'
import Theme from './components/Theme'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Layout>
          <Views />
        </Layout>
      </BrowserRouter>
    </Theme>

  )
}

export default App
