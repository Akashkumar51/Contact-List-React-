import React,{useState} from 'react'

function ContactCard(props) {
  console.log(props);
  const [showAge, setShowAge] = useState(false)
  return (
    <div className="contact-card">
    <img src={props.avtartUrl} alt="profile"></img>
    <div className='user-detail'>
      <p>Name : {props.name}</p>
      <p>Email : {props.email}</p>
      <button onClick={() =>setShowAge(!showAge)}>Show Age</button>
      {showAge && <p> {props.age} </p>}
    </div> 
  </div>
  )
}

export default ContactCard