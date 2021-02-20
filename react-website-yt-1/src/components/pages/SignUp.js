import React from 'react';
import '../../App.css';
import './SignUp.css'

    function SignUp(){
         return (
      <form onSubmit={handleSubmit} className='form1' >
        <label>
         SIGN UP FORM in JSX :
         </label> {' '} {' '} {' '}


        <li><label for="email"><b>Email  :</b></label> {' '} {' '}{' '}
        <input type="text" placeholder="Enter Email" name="email" required /></li>


        <li><label for="psw"><b>Password  :</b></label> {' '} {' '}{' '}
        <input type="password" placeholder="Enter Password" name="psw" required /> </li>

        <li><label for="psw-repeat"><b>Repeat Password</b></label> {' '} {' '}{' '}
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input></li> {' '} {' '}{' '}

         <input type="submit" value="Submit" id="Submit" />
         <h1>{'     ______________________________________________________________________    '}</h1>

         <h1 className='sign-up'></h1>
        </form>


    );

    }

    function handleChange(){
        return null;
    }

   function handleSubmit() {
    alert('You have been successfully registered: ');

  }



export default SignUp