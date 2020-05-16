import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Card from './components/layouts/card';
import firebase from './Services/firebase';
import './App.css';

class App extends Component{
  state = {
      locations: null
    }
  
  
  componentDidMount(){
    const db=firebase.firestore();
    console.log('mounted');
    db.collection("locations").get()
    .then(
      snapshot=>{
        const loc=[]
        snapshot.forEach(doc=>{
          const data = doc.data()
          loc.push(data)
        })
        this.setState({locations:loc})
    }).catch(error => console.log(error))
  }

  render()  {
  return (
    <BrowserRouter>
      <div className = "App">
          <Navbar></Navbar>
      </div>
      <li>
        <Card></Card>
         <Card></Card>
          <Card></Card>
      </li>
      {
        this.state.locations&&this.state.locations.map(location =>{
          return(
            <div>
              <p>
                {location.map}
              </p>
            </div>
          )
        })
      }
    </BrowserRouter>
    );
  }
}

export default App;
