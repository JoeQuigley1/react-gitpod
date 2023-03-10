import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
     }
    }

    // handleSignIn =() => {
    //     this.setState({
    //       isLoggedIn: true
    //     })
    //     console.log(this.state)
    // }
    // handleSignOut = () => {
    //   this.setState({
    //     isLoggedIn: false
    //   })
    // }

    toggleIsLoggedIn = () => {
      this.setState((prevState) => ({
        isLoggedIn: !prevState.isLoggedIn,
      }));
    };

  render() {
    return (
      <div>
        <MethodAsPropsChild 
        isLoggedIn={this.state.isLoggedIn}
        handleSignIn={this.handleSignIn}
        handleSignOut={this.handleSignOut} />
      </div>
    )
  }

}

export default MethodAsPropsParent