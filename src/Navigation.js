import React from 'react';

export default function Header(){
        return(
            <div className = "Navigation" Method = "POST">
                <form className = "buttons">
                    <input type = "button" className = "Home" Value = "Home"/>
                    <input type = "button" className = "Home" Value = "Examination"/>
                    <input type = "button" className = "Home" Value = "Contact Us" onClick="contact.html"/>
                </form>
                
            </div>
        );
}