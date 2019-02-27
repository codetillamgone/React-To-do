import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import TodoItem from "./components/TodoItem";
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import vSchoolProduct from './components/vSchoolProduct';
import Product from './components/Product';
import todoData from './components/todoData';
import Login from './components/Login';
import Conditional from './components/Conditional';


class App extends React.Component{

 constructor(){
    super();
    this.state = {
      todo: todoData,
      isLoggedIn: true,
      isLoading:true
      }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
 }


componentDidMount(){  //Chance to run some code right after our component mounts on the screen for the first time
  setTimeout(() =>{
    this.setState(prevState=>{
      return{
        todo: prevState.todo,
        isLoggedIn: prevState.isLoggedIn,
        isLoading: !prevState.isLoading
      }
    })
  }, 1500)
}

handleClick(){
  
    this.setState((prevState) =>{
     return{
      todo : prevState.todo,
      isLoggedIn : !prevState.isLoggedIn
     }
    }

    )
 

}

 handleChange(id){

  this.setState((prevSate) => {
    const newTodoArray = prevSate.todo.map((item) => {
        if(item.id == id){
          item.completed = !item.completed
        }
        return item
      })

      return {
        todo: newTodoArray
      }
  })

  console.log("Changed " + id)
 
 }



  
  render(){

  /*   const productComponentArray = vSchoolProduct.map((product) =>
    <Product products={{
      key:product.id,
      name:product.name,
      price:product.price,
      description:product.description
    }}/>
   )
   */
   const todoArray = this.state.todo.map((item)=>
   <TodoItem 

     onChange = {this.handleChange}
     todos={{
       key:item.id,
       text:item.text,
       status:item.completed
     }}
   />
 )
 
    return(
      <div>

        <Header/>
        {this.state.isLoading ? 
        <h1>Loading tasks...</h1> :
        todoArray 
      }
      </div>
     
     



   

 
   

  
    );
  }
}



export default App;
