import React, {useState, useEffect} from 'react';
import './App.css';
import Pet from './components/Pet';

function App() {
  const [pets, setPets] = useState([]);
  const [areaCode, setAreaCode] = useState('');

  function startSession()
  {
    var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhdXNENlg3UG9EV3FhQnlVbEwza0R3dUhNOFMxTDJEZHhnU1lTVTZUR1Y0YkxlUTZDZiIsImp0aSI6IjI1Y2JlNDVhNGVmNzE5NTc0OWQyMDgxNjlkZWQzMTY3NjBlMTcwOGJiM2JjMzkyZDAyN2FkMjYzOGZmOGQ1YmI3YTIyYzQ5N2QyN2Q2ODE1IiwiaWF0IjoxNjE1MDkyODgzLCJuYmYiOjE2MTUwOTI4ODMsImV4cCI6MTYxNTA5NjQ4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.fOTwEfa0Q4vYubfoKVLRRMQdHr5RG3HdM5KIpQNiAnb6biF1vjvygelpXktZL0-tkzp7OwgYtyiYTL039yecGp_FYIX1DkERAfx3twtSscwWgPMwqaf0mnbfobWo6XQtKAEif6f7YkAb5WZSUMDPdR01GgOthHnrKYsTXI5zZspmAg7w5nhHciSZu6_1_22bzyQcOkFqauw8uFkLhxEHct7R_OUqbf_ToIbPkIzz0cB3OzR2JpmBLr5n97LT1d312qjKXkjwMCac0DJfFLgUJBK7FpPylIUP4tPs7nJuDGa9t5ysghmGtn-p787y7kamX8zB2VtIkySOHnkfwYh-1A");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.petfinder.com/v2/animals?postcode=78640;status=adoptable\n", requestOptions)
        .then(response => response.json())
        .then(result => {setPets(result)})
        .then(console.log(pets.length))
        .catch(error => console.log('error', error));
  }


    return( 
      <>
        <button onClick = {() =>{startSession()}}>Find a puppy Pal</button>
        <div className = "puppy-container">
          { pets.length > 0 && pets.map( pet => (<Pet key = {pet.id} {...pet}/>))}
        </div>     
      </>
    )
}

export default App;
