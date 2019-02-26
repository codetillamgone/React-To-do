import React from "react";

/*function Header(){

  const date = new Date();
  const dateHours = date.getHours();
  const styles = {
    
    backgroundColor: "grey"
}
  let timeOfDay;

  if(dateHours < 12){
    timeOfDay = "Morning";
    styles.color = "#FFFFF"
  }
  else if( dateHours >= 12 && dateHours < 17){
    timeOfDay = "afternoon"
    styles.color = "black"
  }
  else{
    timeOfDay = "night"
    styles.color= "#8914A3"
    
  }

  

    return(
        <header className="navbar" style={styles}>Welcome to the To-Do app... good {`${timeOfDay}`}</header>

    );
}*/

class Header extends React.Component{

    

    render(){
    const date = new Date();
    const dateHours = date.getHours();
    const styles = {
    
    backgroundColor: "grey"
    }
    let timeOfDay;

    if(dateHours < 12){
    timeOfDay = "Morning";
    styles.color = "#FFFFF"
    }
    else if( dateHours >= 12 && dateHours < 17){
    timeOfDay = "afternoon"
    styles.color = "black"
    }
    else{
    timeOfDay = "night"
    styles.color= "#8914A3"  
    }

    return( 
        <div>
            <header className="navbar" style={styles}>Welcome to the To-Do app... good {`${timeOfDay}`}</header>
           
        </div>
            
        )
    }
}

export default Header;