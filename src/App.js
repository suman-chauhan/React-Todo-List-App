
import './App.css';
import Header from './componants/Header';
import {Todos} from './componants/Todos'
import { Footer } from './componants/Footer';
import { AddTodo } from './componants/AddTodo';
import React ,{useState} from 'react'

function App() {
    let onDelete = (todo)=>
    {
      // console.log("i am onDelete",todo);

      setTodos(todos.filter((e)=>
      {
        return e!==todo;
      }));
    }
  
    let sno ;
    const addTodo = (title,desc)=>
    { 
         if(todos.length===0)
         {
           sno=0;
         } 
        else 
        {
          sno  = todos[todos.length-1].sno+1;
        }
          const myTodo = 
          {
            sno:sno,
            title:title,
            desc:desc
          }
          setTodos([...todos, myTodo]);
          console.log(myTodo);
    }
  const [todos,setTodos]  = useState( [
    {
      sno: 1,
      title :"Go to the Market",
      desc : "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title :"Read Python",
      desc : "You need to learn Python from youtube"
    },
    {
      sno: 3,
      title :"Freecodecamp",
      desc : "COntinue the series of javaScript data structure and algorithm"
    },

  ]);
  return (

    <>
    <Header title= "MyTodoList"  searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
     
    </>
  )
}

export default App;
