import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello, {props.name}!  I see you're {props.age} old; {props.greeting}!!</h1>;
        s
}
export default FunctionalGreetingWithProps;