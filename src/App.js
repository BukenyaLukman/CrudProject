import React from 'react';
import './App.css';
import firebase from './Config';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class App extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      const cardStyles = {
          width: 'auto',
          height:'auto',
          backgroundColor:'white',
          margin:'auto',
          display:'block',
          opacity: 0.5,
          marginTop: '60px',
          paddingTop: '10px',
          paddingLeft:'20px',
          borderStyle:'outset',
          borderLeft:'50px solid black',
          borderRadius:'20px'
      }
      return(
        <div>
            <Card style = {cardStyles }>
                <div className="Buttons">
                  <Link to="/create">
                      <button class="Add-Button">Add Product</button>
                  </Link>
                </div>
            </Card>
        </div>
      )
    }
}

export default App;