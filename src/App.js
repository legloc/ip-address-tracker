import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'
import './App.sass'

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h2 className="header-title">IP Address Tracker</h2>
        <Form />
        <Info />
      </header>
      <Map />
    </div>
  )
}

export default App