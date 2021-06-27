import React from 'react';

export default function SignUp(){
        return(
            <div className = "Login">
              <form id = "signup" method = "POST">
                <center>
                <table className = "SignUp_Form">
                    <tr>
                      <td>
                        Email ID 
                      </td>
                      <td>
                        <input type = "email" id = "email" className = "TextBox"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Password 
                      </td>
                      <td>
                        <input type = "password" id = "password" className = "TextBox"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Enrollment Number 
                      </td>
                      <td>
                        <input type = "text" id = "enrollment_number" className = "TextBox"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Confirm Password 
                      </td>
                      <td>
                        <input type = "password" id = "conform_password" className = "TextBox"/>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan = "2">
                       <center><input type = "submit" id = "signup" className = "SignUp_Button"/></center> 
                      </td>
                    </tr>
                    <tr>
                      <td colSpan = "2">
                        <center><input type = "reset" id = "reset" className = "Reset_Button"/></center>
                      </td>
                    </tr>
                  </table>
                </center>
              </form>
            </div>
        );
}