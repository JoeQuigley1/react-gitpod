import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div><h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading..'}</h1>
      {this.state.isLoggedIn ? (
        <div>
            <p>Welcome to the site! Please completet the steps below:</p>
        <ol>
            <li>confirm email</li>
            <li>Complete profile</li>
        </ol>
        </div>
        
      ) : (<p>Sign in please</p>)}</div>
    )
  }
}

export default ConditionalRenderingClass