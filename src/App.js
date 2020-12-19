import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import './App.sass'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [state, setState] = useState({
    ip: '8.8.8.8',
    isp: 'Google LLC',
    location: {
      country: 'US',
      city: 'Mountain View',
      postalCode: '94035',
      timezone: '-08:00',
      lat: 37.38605,
      lng: -122.08385
    }
  })
  
  const handleFormSubmit = ip => {
    if (ip) {
      setError(false)
      setLoading(true)
  
      axios.get(`https://geo.ipify.org/api/v1?apiKey=${ process.env.REACT_APP_IPIFY_API_KEY }&ipAddress=${ ip }`)
        .then(response => {
          setError(false)
          setState(response.data)
        })
        .catch(error => {
          setError(true)
        })
        .then(() => {
          setLoading(false)
        })
    }
  }

  return (
    <div className="wrapper">
      <header>
        <h2 className="header-title">IP Address Tracker</h2>
        <Form handleSubmit={ ip => handleFormSubmit(ip) } />
        <Info data={ state } loading={ loading } error={ error } />
      </header>
      <Map lat={ state.location.lat } lng={ state.location.lng } />
    </div>
  )
}

export default App