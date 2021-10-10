import React from 'react'

export default function Alert(props) {
    if(props.alert){
    var word=props.alert.type
    
    if(props.alert.type==='danger')
    {
        word='error'
    }
}
    return (
       props.alert&& <>
           <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert`} style={{height:"55px"}}>
  <strong className='align-middle'>{word}  </strong><span className='align-middle'>{props.alert.msg}</span>
  
</div>  
        </>
    )
}
