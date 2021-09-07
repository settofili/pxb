import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
return (
<div className="login">
<div className="loginContainer">

<h1> Congratulations, you are verified!! Please Sign In.</h1>

<label>Email</label>
<input type="text"
autoFocus
required
/>

<label>Password</label>
<input type="password"
required />

<div className="">
<Link to="/upload"> <button >Sign In</button>
</Link>
</div>
</div>

</div>
)
}

export default Signup
