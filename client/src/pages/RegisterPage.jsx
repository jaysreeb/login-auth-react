import { Link, useNavigate } from "react-router-dom";
import '../assets/style.css'
import { useState } from "react";

function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

    const handleRegister =(e) => {
        e.preventDefault();
        if(!validateEmail(email)){
            alert("Invalid email format");
            return ;
        }
        if(password.length < 6){
            alert("Password must be at least 6 characters long");
            return;
        }
        if(password !== confirmPassword){
            alert('Password do not match!');
            return;
        }
        const existingUsers = JSON.parse(localStorage.getItem("users"))|| [];
        const userExists = existingUsers.find((u) => u.email === email);
        if(userExists){
            alert("Email already exists!");
            return ;
        }

        const newUSer = {name, email, password};
        existingUsers.push(newUSer);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        alert("User registered successfully");
        navigate("/");        
    };

    return (
    <div className="register-container">
            <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='form-group'>
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input type='password' id="confirmPassword" placeholder="confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit">Register</button>
        </form>
        <p class="login-link">
            Already have an account?<Link to="/">Login Here</Link>
        </p>
    </div>        
    )
}

export default RegisterPage;