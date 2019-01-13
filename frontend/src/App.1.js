import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    'id': 1,
    'title': '1st Item',
    'description': 'Description here.'
  },
  {
    'id': 2,
    'title': '2nd Item',
    'description': 'Another description here.'
  },
  {
    'id': 3,
    'title': '3rd Item',
    'description': 'Third description here.'
  }
];

class App extends Component {

    state = {
      todos : []
    };
    async componentDidMount(){
      try{
        const res = await fetch('http://127.0.0.1:8000/api/');
        const todos = await res.json();
        this.setState({
          todos
        });
      } catch(e){
        console.log(e);
      }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.todos.map(item =>(
              <div>
                <h1>{item.title}</h1>
                <span>{item.description}</span>  
              </div> 
            ))}
          </div>  
        </header>
      </div>
    );
  }


}

export default App;
