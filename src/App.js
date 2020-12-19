import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import './App.sass'

const App = () => {
  const [loading, setLoading] = useState(false)
  
  const handleFormSubmit = ip => {
    console.log('REQUEST STARTED')
    setLoading(true)

    axios.get(`https://geo.ipify.org/api/v1?apiKey=${ process.env.REACT_APP_IPIFY_API_KEY }&ipAddress=${ ip }`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        console.log('REQUEST FINISHED')
        setLoading(false)
      })
  }

  return (
    <div className="wrapper">
      <header>
        <h2 className="header-title">IP Address Tracker</h2>
        <Form handleSubmit={ ip => handleFormSubmit(ip) } />
        <Info loading={ loading } />
      </header>
      <Map />
    </div>
  )
}

export default App