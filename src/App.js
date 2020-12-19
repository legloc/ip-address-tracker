import Form from './components/Form'
import './App.sass'

const App = () => {
  return (
    <div>
      <header>
        <h2 className="header-title">IP Address Tracker</h2>
        <Form />
      </header>
    </div>
  )
}

export default App