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
      isLoading: true
      }
  
    this.handleChange = this.handleChange.bind(this);
 }


componentDidMount(){  //Chance to run some code right after our component mounts on the screen for the first time
  setTimeout(() =>{
    this.setState({
      isLoading:false
    })
  }, 1500)
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

     const productComponentArray = vSchoolProduct.map((product) =>
    <Product products={{
      key:product.id,
      name:product.name,
      price:product.price,
      description:product.description
    }}/>
   )
 
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

      <ContactCard 
      contact={{
        imgUrl:"http://placekitten.com/200/300",
        name: "Mr Whiskerson",
        phone:"(212) 555-1234",
        email:"adebiyi137@gmail.com"
    }}      />

      {todoArray}

      <Joke
        jokes={{
          joke: "what joke are you looking for",
          punchline: "Dey there dey find joke"
        }}      />

      <Joke
      jokes={{
        punchline:"It's hard to explain puns to kleptomanaics because they always take things literally"
      }}     />

     {productComponentArray}

     <Login  loginCheck={{
       state: this.state.isLoggedIn
     }} />

     {this.state.isLoading ? <h1>Loading...</h1> :  <Conditional />}
   

    </div>
    );
  }
}



export default App;
