import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
return (
<div className="login">
<div className="loginContainer">

<label>Broker ID</label>
<input type="text"
required
/>

<label>First Name</label>
<input type="text"
required
/>

<label>Last Name</label>
<input type="text"
required
/>

<label>Email</label>
<input type="text"
autoFocus
required
/>

<label>Password</label>
<input type="password"
required />
<div className="">
<Link to="/signin">
<button >Sign Up</button>
</Link>
</div>
</div>

</div>
)
}

export default Signup
