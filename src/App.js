import Form from './components/Form'
import Info from './components/Info'
import './App.sass'

const App = () => {
  return (
    <div>
      <header>
        <h2 className="header-title">IP Address Tracker</h2>
        <Form />
      </header>
      <Info />
    </div>
  )
}

export default App