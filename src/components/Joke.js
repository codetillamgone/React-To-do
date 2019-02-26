import React from "react";

class Joke extends React.Component{

    constructor(){
        super()
        this.state = {
            joke: "No Joke",
            punchline: "No Punchline"
        }
    }

    render(){
        if(this.props.jokes.hasOwnProperty('joke')){
            return(
                <div>
                    <h3>{this.props.jokes.joke}</h3>
                    <h4>{this.props.jokes.punchline}</h4>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h4>{this.props.jokes.punchline}</h4>
                </div>
            )
        }
    }
}



export default Joke;