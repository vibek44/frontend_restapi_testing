const Notification = ({ message }) => {
  if(message.error){
    return( <p className="error">{message.error}</p> )
  }
  if(message.success){
    return( <p className="success">{message.success}</p> )
  }
  return null
}


export default Notification