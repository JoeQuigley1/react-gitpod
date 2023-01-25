import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please completet the steps below:</p>
            <ul>
                <li>confirm email</li>
                <li>Complete profile</li>
            </ul>
            </div>
            
            ) : (<p>Sign in please</p>)}
        </div>
  )
}

export default UserMessage