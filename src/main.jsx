import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home' 
import Header from './components/Header'
import { GlobalStyles } from './styles/globalStyles'
import Footer from './components/Footer'
import Login from './containers/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>,
)
