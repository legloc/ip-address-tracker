import IconArrow from '../images/icon-arrow.svg'

const Form = () => {
  return (
    <div className="form-group">
      <input className="form-input" type="text" placeholder="Search for any IP address or domain" />
      <button className="form-btn">
        <img src={ IconArrow } alt="Search" />
      </button>
    </div>
  )
}

export default Form