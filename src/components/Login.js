import React from "react";

class Login extends React.Component{



    
    render(){
        const testValue = {}
        if(this.props.requiredAttributes.isLoggedIn){

            testValue.text = "Logged In"
            testValue.button = "Out"
        }
        else{
            testValue.text = "Logged Out"
            testValue.button = "In"
        }
        return(
            
            <div>
            <h1>{testValue.text}</h1>
            <button onClick={this.props.requiredAttributes.handleClick} >Log {testValue.button}</button>
        </div>
        )
       
        
    
    }
}


export default Login