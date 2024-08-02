import React from 'react'

const Alert = (props) => {
const capitalize=(words)=>{
  const Lower=words.toLowerCase();
  
  return Lower.charAt(0).toUpperCase()+Lower.slice(1);
}

  return (
  
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
 <strong> {capitalize(props.alert.type)}</strong>: {props.alert.message}  

  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

      
    
  )
}

export default Alert
