import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../assets/style.css'

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin =(e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users"))|| [];
        const user = users.find(u => u.email === email && password === password);
        if(!user){
            alert("Invalid Credentials");
            return;
        }

        sessionStorage.setItem("currentUser" , JSON.stringify(user));
        navigate("/welcome");
    }


    return (
    <div className="login-container">    
        <div className="form-container">
            <div className="form-wrapper">        
                <h6 className="login-title">You already have an Account-</h6>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input id="email" placeholder="email" type="email" autocomplete="email" value={email} onChange={(e)=> setEmail(e.target.value)} required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id="password" placeholder="password" type="password" autocomplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                    </div>

                    <div className="form-options">
                        <div className="remember-me">
                            <input id="remember-me" name="remember-me" type="checkbox" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <Link to ="#" className="forgot-password">Forgot your password?</Link>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="submit-btn">Sign in</button>
                    </div>
                </form>

                <div className="divider">
                {/* <div className="divider-line"></div> */}
                    <div className="divider-text">Or continue with</div>
                </div>

                <div className="social-buttons">
                    <Link to ='#' className="social-btn">
                    <span className="sr-only">Google</span>
                    <svg className="social-icon" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>              
                    </Link>
                </div>
            </div>
                <span class="create-account">Don't Have an Account?<Link to ="/register">Create Now-</Link></span>
        </div>
    </div>
        
    );
}

export default LoginPage