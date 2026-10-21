import React from 'react'


export const Footer = () => {
    let footerStyle = {
        position: "fixed",
        bottom: "0",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light py-3">
            <p className="text-center m-0">
                Copyright &copy; MyTodoList.com
            </p>
            
        </div>
    )
}