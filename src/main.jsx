import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home' 
import Header from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)
