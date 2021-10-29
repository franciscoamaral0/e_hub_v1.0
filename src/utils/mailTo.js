import { Link } from "react-router-dom"

const MailTo = (value) =>{
return(
  window.open(`mailto:${value}`)
)
}



export {MailTo}