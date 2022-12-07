import React,{useState, useEffect} from 'react';
import './App.css';
import ContactCard from './ContactCard';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    
    Newfunction()
 
  }, [])
  
  
  function Newfunction() {
    axios.get(`https://randomuser.me/api?results=10`)
    .then(function (response) {
      console.log(response);
      setResults(response.data.results)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // .finally(function () {
      //   // always executed
      // });
  }
  return (
  <div>
    {results.map((result,index) => {
      return(
      <ContactCard key = {index}
      avtartUrl = {result.picture.large}
      name = {result.name.first}
      email = {result.email}
      age = {result.dob.age}/>
      )
    })}
    <div>
      <button className='refershbutton' onClick={() => Newfunction()}>Change</button>
    </div>
  </div>
  );
}

export default App;
