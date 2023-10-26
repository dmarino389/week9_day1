import React, { Component } from 'react'
import Navbar from './Navbar';

export default class App extends Component {
 
 
 // This constructs your components. 
  constructor(){
    super();
    this.state = {
      count: 1,
      user: null,
      negativeCount: 1000
    }
    console.log('I am constructing')
  }



  logMeIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    this.setState({user: username})
  }

  multiplyNumber = () => {
    this.setState({
      count: this.state.count * 2
    })
  }

  subtractNumber = () => {
    this.setState({
      negativeCount: this.state.negativeCount -1
    })
  }




 render() {
  console.log('I am rendering')
  return (
    <div>
      <Navbar user = {this.state.user} />
    
    {/* This mulitplies the number 1 by 2 everytime the button gets clicked. */}
      <h1>
        Keep Multiplying By Two: {this.state.count}
      </h1>
      <button onClick={this.multiplyNumber}>*</button>

    
    {/* This subtracts 1 from the number 1000 everytime the button gets clicked. For some reason it doesnt seem to be working. */}
      <h1>
        How fast can you subtract: {this.state.negativeCount}
      </h1>
      <button onClick={this.subtractNumber}>-</button>

      
      <h2>Current User: {this.state.user}</h2>
     
     
      <form onSubmit={this.logMeIn}>
        <input placeholder='What is Your Name' name = 'username'/>
        <button>Login</button>
      </form>
    </div>
  )
 } 
}