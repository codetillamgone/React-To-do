import React from "react";

/*function ContactCard(props){
   console.log(props);
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>


        </div>
    );


}*/

class ContactCard extends React.Component{
    render(){
        return(
        <div className="contact-card">

            <img onMouseOver={() => console.log("Hovered over this fucking bitch")} src={this.props.contact.imgUrl}/>
            <h3>{this.props.contact.name}</h3>
            <p>Phone: {this.props.contact.phone}</p>
            <p>Email: {this.props.contact.email}</p>


        </div>
        );
    }
}





export default ContactCard;