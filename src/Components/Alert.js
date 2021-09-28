import React from 'react'

export default function Alert(props) {
    return (
       props.alert&& <>
           <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert`} style={{height:"55px"}}>
  <strong className='align-middle'>{props.alert.type}:  </strong><span className='align-middle'>{props.alert.msg}</span>
  
</div>  
        </>
    )
}
