import { useState } from 'react'
import IconArrow from '../images/icon-arrow.svg'

const Form = ({ handleSubmit }) => {
  const [state, setState] = useState('')

  return (
    <div className="form-group">
      <input className="form-input" type="text" placeholder="Search for any IP address or domain" onChange={ e => setState(e.target.value) } value={ state } />
      <button className="form-btn" onClick={ () => handleSubmit(state) }>
        <img src={ IconArrow } alt="Search" />
      </button>
    </div>
  )
}

export default Form