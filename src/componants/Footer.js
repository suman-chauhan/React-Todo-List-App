import React from 'react'

export const Footer = () => {
    let footerStyle =  {
        position:"relative" ,
    top:"10vh" ,
     width:"100%"
    }
    return (
        
             <div className="bg-dark text-light my-3" style={footerStyle}>
           <p className = "text-center" >
               Copyright &copy; MyTodoList.com
           </p>
        </div>
        
    )
}
