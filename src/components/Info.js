const Info = ({ data, loading }) => {
  return (
    <div>
      <div className="info">
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
    </div>
  )
}

export default Info