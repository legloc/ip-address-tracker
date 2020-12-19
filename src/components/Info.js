const InfoItems = ({ data }) => {
  return (
    <div className="items-wrapper">
      <div className="info-item">
        <span className="item-title">IP address</span>
        <span className="item-value">{ data.ip }</span>
      </div>
      <div className="info-item">
        <span className="item-title">Location</span>
        <span className="item-value">{ `${ data.location.city }, ${ data.location.country } ${ data.location.postalCode }` }</span>
      </div>
      <div className="info-item">
        <span className="item-title">Timezone</span>
        <span className="item-value">UTC { data.location.timezone }</span>
      </div>
      <div className="info-item">
        <span className="item-title">ISP</span>
        <span className="item-value">{ data.isp }</span>
      </div>
    </div>
  )
}

const Info = ({ data, loading, error }) => {
  return (
    <div>
      <div className="info">
        { loading && <h3 className="info-title">Loading..</h3> }
        { error && <h3 className="info-title">Enter valid IP address</h3> } 
        { (!loading && !error) && <InfoItems data={ data } /> }
      </div>
    </div>
  )
}

export default Info