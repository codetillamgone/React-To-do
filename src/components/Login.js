import React from "react";

class Login extends React.Component{
    render(){
        let boolval;
        switch(this.props.loginCheck.state){
            case true:
                boolval = true
                break;
            case false:
                boolval = false;
                break;
        }

        return(

            <h1>You are currently logged({boolval ? "in" : "out"})</h1>
        )
    }
}





export default Login;