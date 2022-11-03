import React from 'react'

function Alert(props) {
   
  return (
    <div style={{height:'50px'}}>
    {props.alert &&<div className='container-fluid'>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg}</strong> 
  </div>
    </div>}
    </div>
  )
}

export default Alert