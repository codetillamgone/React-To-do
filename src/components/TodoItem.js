import React from "react";

/*function TodoItem(props){

    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.todos.status} />
            <p>{props.todos.text}</p>
           

           
        </div>
        
        
    );


}
*/
class TodoItem extends React.Component{

    render(){
        return(
            <div className="todo-item">
            <input type="checkbox" 
            checked={this.props.todos.status} 
            onChange = {()=> this.props.onChange(this.props.todos.key)}
            />
            <p>{this.props.todos.text}</p>
    
        </div>
        )
    }

}






export default TodoItem